const User = require("../models/User")




// fetched the staff and expert who are not approved yet 
exports.pendingStaff = async(req, res) => {
    try{
        // only admin can access
        if (req.user.accountType !== "Admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied. Only admin can view pending staff accounts.",
            });
        }
         // fetch unapproved staff
        const users = await User.find({
            approved: false,
            accountType: "Staff",
        }).select("-password");

        console.log("users", users);
        

        // return response
        return res.status(200).json({
            success: true,
            message: "Pending staff accounts fetched successfully",
            data: users,
        });
    } catch(error){
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch pending staff accounts",
        });
    }
}

// pending Client 
exports.pendingClient = async(req, res) => {
    try{
        // console.log("vishal131");
        
        // only admin can access
        if (req.user.accountType !== "Admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied. Only admin can view pending client accounts.",
            })
        }

        // fetch pending clients
        const clients = await User.find({
            approved: false,
            // accountType: "Client",
        }).select("-password");

         // return response
        return res.status(200).json({
            success: true,
            message: "Pending client accounts fetched successfully",
            data: clients,
        });
    } catch(error){
         console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch pending client accounts",
        });
    }
        

}

// approve User(staff & Client)
exports.approveUser = async (req, res) => {

    try {

        // fetch user id
        const { userId } = req.body;

        // validation
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }

        // console.log("user12", req.user);
        
        // only admin can approve
        if (req.user.accountType !== "Admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied. Only admin can approve accounts.",
            });
        }

        // find user
        const user = await User.findById(userId);

        // check user exists
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // check already approved
        if (user.approved) {
            return res.status(400).json({
                success: false,
                message: "User already approved",
            });
        }

        // approve user
        user.approved = true;

        await user.save();

        // return response
        return res.status(200).json({
            success: true,
            message: `${user.accountType} account approved successfully`,
            data: user,
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to approve user",
        });
    }
};