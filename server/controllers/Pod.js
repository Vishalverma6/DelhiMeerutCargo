require("dotenv").config();
const POD = require("../models/POD");
const { uploadImageToCloudinary } = require("../utils/imageUploader")

exports.uploadPOD = async (req, res) => {
    try {
        // fetch the data from req body
        const { lrNumber, invoiceNumber, deliveryDate } = req.body;
        console.log("lr Number", lrNumber)
        // fetch file 
        const podFile = req.files.pod;

        // validatation
        if (!lrNumber || !podFile) {
            return res.status(400).json({
                success: false,
                message: "LR Number and POD file are required",
            });
        }

        const findPOD  =  await POD.findOne({lrNumber});
        if(findPOD){
            return res.status(400).json({
                success:false,
                message:"POD already Uploaded",
            })
        }

        // upload report to Cloudinary
        const podFileData = await uploadImageToCloudinary(podFile,
            process.env.FOLDER_NAME,
            // null,
            // null,
            // lrNumber,
        );

        // console.log("pod File", podFileData);

        // create and save a new Pod in database
        const newPOD = await POD.create({
            lrNumber,
            invoiceNumber,
            deliveryDate,
            podUrl: podFileData.secure_url,
        });

        // return response 
        return res.status(200).json({
            success: true,
            message: "POD Uploaded Successfully",
            data: newPOD,
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to upload POD. Please try again.",
        })
    }
}

// get All POD
exports.getAllPOD = async (req, res) => {
    try {
        const allPOD = await POD.find({});

        // return response
        return res.status(200).json({
            success: true,
            message: "All POD fetched Successfully",
            data: allPOD,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Cannot fetched All POD,please try again",
            error: error.message,
        });


    }
}

// get POD by LR Number
exports.getPODByLRNumber = async (req, res) => {
    try {
        // fetched the lr Number from body
        const { lrNumber } = req.body;

        // console.log("lr",lrNumber);
        

        // validation of lr Number
        if (!lrNumber) {
            return res.status(400).json({
                success: false,
                message: "LR Number  is required",
            });
        }

        // find POD
        const podDetails = await POD.findOne({ lrNumber });

        // if not found
        if (!podDetails) {
            return res.status(404).json({
                success: false,
                message: "POD not found",
            });
        }

        // return response
        return res.status(200).json({
            success: true,
            message: "POD fetched successfully",
            data: podDetails,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch POD",
            error: error.message,
        });
    }
}

// edit the Pod by lr Number
exports.editPODDetails = async (req, res) => {

}

// delete POD
exports.deletePOD = async (req, res) => {
    try {
        // fetched the lr Number froom req body
        const { lrNumber } = req.body;
        // console.log("lr", lrNumber);
        

        // validation
        if (!lrNumber) {
            return res.status(401).json({
                success: false,
                message: "Please enter valid LR number",
            });
        }

        // ensure that only staff and admin can delete the POD
        if (req.user.accountType !== "Admin" && req.user.accountType !== "Staff") {
            return res.status(403).json({
                success: false,
                message: "Access denied. Only admin and staff can delete POD.",
            })
        }
        await POD.findOneAndDelete({ lrNumber });

        // return response
        return res.status(200).json({
            success: true,
            message: "POD deleted successfully",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "failed to delete the POD,server error",
        });
    }
}