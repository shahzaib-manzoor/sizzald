/**
 * Created by Mb
 */

//import mongoose and models
var mongoose = require("mongoose");
var AC = mongoose.model("AC");
var Add = require("../models/adds.model");
var config = require("dotenv").config();
const jwtHelper = require("../helpers/jwt.helper");
const { getHashValue } = require("../helpers/users.helper");
var seedrandom = require("seedrandom");
var crypto = require("crypto");
//async for async tasks
const clientHelper = require("../helpers/users.helper");
//helper functions
const responseHelper = require("../helpers/response.helper");

var AS = async (req, res) => {
  AC.findOne({})
    .then(async (ac) => {
      if (ac) {
        ac.as = !ac.as;
        await ac.save();
        responseHelper.success(res, ac, "ac done!");
      } else {
        let ac = new AC();
        await ac.save();
        responseHelper.success(res, ac, "ac done!");
      }
    })
    .catch((err) => responseHelper.systemfailure(res, err));
};

//@route    POST auth/login
//@desc     login user
//@access   Public
//@params   {email}, {password}
var getAll = async (req, res) => {
   
  try {
   //find all distinct adds by app_name
    const adds = await Add.aggregate([
        {
            $group: {
                _id: "$app_name",
                id: { $first: "$_id" },
                provider_app_id: { $first: "$provider_app_id" },
                placement_id: { $first: "$placement_id" },
                package_name: { $first: "$package_name" },
                app_name: { $first: "$app_name" },
                status: { $first: "$status" },
                total_adds: { $sum: 1 },
            },
        },


    ]);
    var message = "Adds found";
     
    return responseHelper.success(res, adds, message);
    } catch (error) {
    responseHelper.requestfailure(res, error);
    }



};

var deleteAll = async (req, res) => {
    try {
        const adds = await Add.deleteMany({});
        var message = "Adds deleted";
        return responseHelper.success(res, adds, message);
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

 
var addOne = async (req, res) => {
  const {  
    provider_app_id,
    placement_id,
    package_name } = req.body;
  try {
    
    
 
    const newadd = await Add.create(req.body);
    var message = "Add created";
    var responseData = { add: newadd };
    return responseHelper.success(res, responseData, message); 
    } catch (error) {
    responseHelper.requestfailure(res, error);
    }
};
var findByAppName = async (req, res) => {
    try {
        await Add.find({app_name:req.params.app_name}).then((add) => {
            if (add) {
                responseHelper.success(res, add, "Add found");
            } else {
                responseHelper.requestfailure(res, "Add not found");
            }
        });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};


var updateOne = async (req, res) => {
 
    try {
        await Add.findByIdAndUpdate(req.params.id, req.body,{new: true}).then((add) => {
            if (add) {
                responseHelper.success(res, add, "Add updated");
            } else {
                responseHelper.requestfailure(res, "Add not found");
            }
        });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

//NEsted Field update
// var updateOne = async (req, res) => {
 
//     try {
//         await Add.findOneAndUpdate({ "fixture.id": 1234 }, { $set: { 'fixture.$.referee': 'kmsa',provider_app_id:'kakaka' } },{new:true}).then((add) => {
//             if (add) {
//                 responseHelper.success(res, add, "Add updated");
//             } else {
//                 responseHelper.requestfailure(res, "Add not found");
//             }
//         });

var getOne = async (req, res) => {
    try {
        await Add.findById(req.params.id).then((add) => {
            if (add) {

                responseHelper.success(res, add, "Add found");
            } else {
                responseHelper.requestfailure(res, "Add not found");
            }
        });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};


var deleteOne = async (req, res) => {
    try {
        await Add.findByIdAndDelete(req.params.id).then((add) => {
            if (add) {
                responseHelper.success(res, add, "Add deleted");
            } else {
                responseHelper.requestfailure(res, "Add not found");
            }
        });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

module.exports = {
    AS,
    getAll,
    addOne,
    updateOne,
    deleteOne,
    getOne,
    findByAppName
};

    

 
