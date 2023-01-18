/**
 * Created by Mb
 */
 
 
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
FaceBookAdsSchema = new Schema(
  {
    provider_name: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      default: "Facebook",
    },
    provider_app_id: {
      type: String,
      required: true,
    },
    placement_id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum : ['active','inactive'],
      default: 'inactive',
      required: true,
    },
    package_name: {
      type: String,
      required: true,
    },
    app_name: {
      type: String,
    
      required: true,
    },
 
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Adds", FaceBookAdsSchema);
