const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async (file, folder,
    height,
    quality,
    lrNumber,
) => {
    const options = { folder };
    if (height) {
        options.height = height;
    }
    if (quality) {
        options.quality = quality;
    }

    // // set Lr number as file name
    // if(lrNumber){
    //     options.public_id = lrNumber
    // }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

