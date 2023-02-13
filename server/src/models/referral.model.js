var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const constants = require("../hardCodedData").constants;

const referralSchema = new Schema({
    referralCode: {
        type: String,
        default: "",
    },
     
    referralLink: {
        type: String,
        default: "",
    },
    referralCount: {
        type: Number,
        default: 0,
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
  
        
    });


    module.exports = mongoose.model("Refer", referralSchema)
    