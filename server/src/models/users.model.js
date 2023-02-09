/**
 * Created by Mb
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const constants = require("../hardCodedData").constants;
userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  
  referredByCode: {
    type: Schema.Types.ObjectId,
    ref: "Refer",
  },
  vipLevel: {
    type: Number,
    default: 0,
  },
  xp: {
    type: Number,
    default: 0,
  },
  balance: {
    type: Number,
    default: 0,
  },
  reward: {
    type: Number,
    default: 0,
  },
  countryRegion: {
    type: String,
    default: "US",
  },
  

   

  //   first_name: {
  //     type: String,
  //     required: true,
  //   },
  //   last_name: {
  //     type: String,
  //     default: "",
  //   },
  //   profile: {
  //     type: String,
  //     default:
  //       "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
  //   },
  //   role: {
  //     type: String,
  //     enum: constants.roles,
  //     default: "user",
  //   },
  //   forgotPinCode: {
  //     type: String,
  //     default: "",
  //   },

  //   changePassword: { type: Boolean, default: true },
  //   isActive: { type: Boolean, default: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", userSchema);
