const mongoose = require("mongoose");

const podSchema = new mongoose.Schema({
    lrNumber:{
        type: String,
        required: true,
        unique:true,

    },
    invoiceNumber:{
        type: String
    },
    podUrl:{
        type:String,
    },
    deliveryDate:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    // status:{
    //     type:String,
    //     default:pending
    // }
});

module.exports = mongoose.model("POD",podSchema);