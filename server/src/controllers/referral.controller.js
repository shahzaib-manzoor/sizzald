const mongoose = require("mongoose");
const Referal = require("../models/referral.model");
const config = require("dotenv").config();
const jwtHelper = require("../helpers/jwt.helper");
const { getHashValue } = require("../helpers/users.helper");
const seedrandom = require("seedrandom");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
//async for async tasks
const clientHelper = require("../helpers/users.helper");
//helper functions
const responseHelper = require("../helpers/response.helper");
 
//@route    POST auth/login
//@desc     login user
//@access   Public
//@params   {email}, {password}
const getAll = async (req, res) => {
  try {
    const referral = await Referal.find({});
    const message = "referral fetched";
    return responseHelper.success(res, referral, message);
  }
    catch (error) {
    responseHelper.requestfailure(res, error);
    }
 
};

const deleteAll = async (req, res) => {
    try {
        await Referal.deleteMany({});
        const message = "referral deleted";
        return responseHelper.success(res, {}, message);
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

 
const addOne = async ( id) => {
 
    //generate random referral code using id hash salted with random number
    const salt = await bcrypt.genSalt(4);
     const referralCode =  await bcrypt.hash(id.toString(), salt);
    const referralLink = `${process.env.BASE_URL}/signup/${referralCode}`;
     
    const payload = {
        referralCode: referralCode?referralCode:null,
        referralLink: referralLink,
        userId: id,


    }

    try {
        const referral = await Referal.create(payload);
        const message = "referral created";
        return 
    } catch (error) {
        return error
    }
};
 


const findByAppName = async (req, res) => {
    try {
        const referral = await Referal.find({ app_name: req.params.app_name });
        const message = "referral fetched";
        return responseHelper.success(res, referral, message);
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};


const updateOne = async (req, res) => {
 
    try {
        await Referal.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((referral) => {
            if (referral) {
                responseHelper.success(res, referral, "referral updated");
            } else {
                responseHelper.requestfailure(res, "referral not found");
            }
        });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

//NEsted Field update
// const updateOne = async (req, res) => {
 
//     try {
//         await Add.findOneAndUpdate({ "fixture.id": 1234 }, { $set: { 'fixture.$.referee': 'kmsa',provider_app_id:'kakaka' } },{new:true}).then((add) => {
//             if (add) {
//                 responseHelper.success(res, add, "Add updated");
//             } else {
//                 responseHelper.requestfailure(res, "Add not found");
//             }
//         });

const getOne = async (req, res) => {
    try {
        await Referal.findById(req.params.id).then((referral) => {
            if (referral) {
                responseHelper.success(res, referral, "referral fetched");
            } else {
                responseHelper.requestfailure(res, "referral not found");
            }
        });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};


const deleteOne = async (req, res) => {
    try {
        await Referal.findByIdAndDelete(req.params.id).then((referral) => {
            if (referral) {
                responseHelper.success(res, referral, "referral deleted");
            } else {
                responseHelper.requestfailure(res, "referral not found");
            }
        });
    } catch (error) {
        responseHelper.requestfailure(res, error);
    }
};

module.exports = {
    getAll,
    addOne,
    updateOne,
    deleteOne,
    getOne,
    findByAppName
};
