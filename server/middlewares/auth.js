const jwt = require("jsonwebtoken");
require("dotenv").config();


// auth
exports.auth = async(req, res, next) => {
    try{

        console.log("Hii Vishal");
        
        // extract the token
        const token = req.cookies.token 
                        || req.body.token 
                        ||req.header("Authorization")?.replace("Bearer ", "").trim();

    // if token missing ,then send response
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Token is missing",
        });
    }

    // verify the token
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decode);
        req.user = decode;
    }catch(error){
        // verification issue
        return res.status(401).json({
            success:false,
            message:"Token is Invalid",
        });
    }
    next();
    
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while validating the token ",
        });
    }
}

// isAdmin
exports.isAdmin = async(req, res, next) => {
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin only",
            })
        }
        next();
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified ,please try again later",
        });
    }

}

// isStaff
exports.isStaff = async(req, res, next) => {
    try{
        
        if(req.user.accountType !== "Staff"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Staff only",
            })
        }
        console.log("userRole", req.user)
        // checking the Admin Approval
        if(!req.user.approved){
            return res.status(403).json({
                success: false,
                message: "Access denied. Staff has not been approved yet."
            })
        }
        next();

    } catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified ,please try again later",
        })
    }
}

// isClient
exports.isClient = async(req, res, next) => {
    try {
        if (req.user.accountType !== "Client") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Client only",
            });
        }

        // checking the admin approval
        if (!req.user.approved) {
            return res.status(403).json({
                success: false,
                message: "Access denied. Client has not been approved yet."
            })
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified ,please try again later",
        });
    }
}

// // isStaffOrClient 
// exports.isStaffOrClient = async(req, res, next) => {
//     try{
//         if(req.user.accountType !== "Staff" && req.user.accountType !== "Client"){
//             return res.status(401).json({
//                 success: false,
//                 message: "This is a protected route for Staff only",
//             })
//         }
//     } catch(error){

//     }
// }