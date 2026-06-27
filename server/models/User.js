const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    accountType: {
        type: String,
        enum: ["Admin", "Staff", "Client"],
        required: true,
    },
    approved: {
        type:Boolean,
        default:false,
    },
    token: {
        type:String,
    }

},
    { timestamps: true },
)

module.exports = mongoose.model("User", userSchema);