/**
 * Created by Mb
 */

//import mongoose and models
var mongoose = require("mongoose");
// var AC = mongoose.model("AC");
var User = require("../models/users.model");
var config = require("dotenv").config();
const jwtHelper = require("../helpers/jwt.helper");
const { getHashValue } = require("../helpers/users.helper");
var seedrandom = require("seedrandom");
var crypto = require("crypto");
//async for async tasks
const clientHelper = require("../helpers/users.helper");
//helper functions
const responseHelper = require("../helpers/response.helper");
const referralController = require("./referral.controller");
const referralModel = require("../models/referral.model");

 

//@route    POST auth/login
//@desc     login user
//@access   Public
//@params   {email}, {password}
var login = async (req, res) => {
  const { email, password } = req.body;
  try {
    

    const exists = await User.findOne({ email: email }).populate("referralCode");
    if (exists) {
      const isMatch = await clientHelper.comparePassword(
        password,
        exists.password
      );
      if (isMatch) {
        const token = await jwtHelper.signAccessToken(exists);
        var message = "Successfully Singed In ";
        delete exists.password;
        var responseData = { token: "Bearer " + token, user: exists };
        return responseHelper.success(res, responseData, message);
      } else {
        let err = "Invalid Password";
        return responseHelper.requestfailure(res, err);
      }
    } else {
      let err = "User doesn't exists";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};
//@route    POST auth/signup
//@desc     signup user
//@access   Public
//@params   {email, first_name, password}
var signup = async (req, res) => {
  const { first_name, username, phone_number, email, password, referralCode } =
    req.body;
  let bodyData = req.body;

  try {
    const checkemail = await User.findOne({ email: email });
    if (checkemail) {
      let err = "Email already exists";
      return responseHelper.requestfailure(res, err);
    }
    if (referralCode) {
      var checkreferral = await referralModel.findOne({
        referralCode: referralCode,
      });
   
      if (!checkreferral) {
        let err = "Invalid Referal Code";
        return responseHelper.requestfailure(res, err);
      }
    }

    const hashpassword = await getHashValue(password);
    bodyData["password"] = hashpassword;
     if(checkreferral)
     {
       bodyData["referredByCode"] = checkreferral.userId;

     }
    const newuser = await User.create(bodyData);
    const data =  await referralController.addOne( newuser._id );


    var message = "Account Signup successful";

    if (!!checkreferral) {
    await referralModel.updateOne({_id:checkreferral._id},{$inc:{referralCount:1}})
    await User.updateOne({_id:checkreferral.userId},{$inc:{reward:0.5}})
    }
    const token = await jwtHelper.signAccessToken(newuser);
    var responseData = { token: "Bearer " + token, user: newuser };
    return responseHelper.success(res, responseData, message);
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};


//@route    GET users
//@desc     get current login user
//@access   Public
var user = async (req, res) => {
  
  try {
    const { id } = req.token_decoded;
    const user = await User.findById(id);
    delete user.password;
    if (user) {
      var message = "User Loaded";
      var responseData = { user: user };
      return responseHelper.success(res, responseData, message);
    }
    let err = "Sorry Your Profile Not Exist";
    return responseHelper.requestfailure(res, err);
    console.log(res)
  } catch (err) {
    return responseHelper.requestfailure(res, err);
  }
};

//@route    POST auth/checkemail
//@desc     check email before forgot password
//@access   Public
//@params   {email}
var sentForgotPinCodeViaEmail = async (req, res) => {
  const { email } = req.body;
  try {
    if (email == "" || email == undefined) {
      let err = "email is required";
      return responseHelper.requestfailure(res, err);
    }

    const user = await User.findOne({ email: email }).lean();
    if (!user) {
      let err = "User with this email not exist";
      return responseHelper.requestfailure(res, err);
    } else {
      delete user.password;
      const rng = seedrandom(crypto.randomBytes(64).toString("base64"), {
        entropy: true,
      });
      const code = rng().toString().substring(3, 9);
      // sendEmailForgotPassword(user, code);
      const token = await jwtHelper.forgotPasswordToken(user);
      await User.findByIdAndUpdate(user._id, { forgotPinCode: code });
      var responseData = {
        token: "Bearer " + token,
        data: true,
      };
      const message = "Email sent to you check your Mail box";
      return responseHelper.success(res, responseData, message);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    POST auth/verifyforgotpin
//@desc     verify forgot pin code in db
//@access   Public
//@params   {pin_code}
var verifyForgotPinCode = async (req, res) => {
  const { pinCode } = req.body;
  try {
    if (pinCode == "" || pinCode == undefined || pinCode == null) {
      let err = "Please enter six digit pin code ";
      return responseHelper.requestfailure(res, err);
    }
    const user = await User.findById(req.forgot_user.id).lean();
    if (user) {
      if (user.forgotPinCode == pinCode) {
        await User.findByIdAndUpdate(user._id, {
          forgotPinCode: "",
          changePassword: true,
        });
        var responseData = { data: true };
        const message = "Pin code is verified";
        return responseHelper.success(res, responseData, message);
      } else {
        let err = "Invalid pin code";
        return responseHelper.requestfailure(res, err);
      }
    } else {
      let err = "User not exist";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    POST auth/resetpassword
//@desc     reset password
//@access   Public
//@params   {email}
var resetPassword = async (req, res) => {
  const { password } = req.body;
  try {
    if (password == "" || password == undefined) {
      let err = "password is required";
      return responseHelper.requestfailure(res, err);
    }
    //
    const user = await User.findById(req.forgot_user.id).lean();
    if (user) {
      if (!user.changePassword) {
        let err = "Pin code is not verified or already used";
        return responseHelper.requestfailure(res, err);
      }
      const hashpassword = await getHashValue(password);
      await User.findByIdAndUpdate(user._id, {
        changePassword: false,
        password: hashpassword,
      });
      delete user.password;
      const token = await jwtHelper.signAccessToken(user);
      var message = "Successfully Singed In ";
      var responseData = { token: "Bearer " + token, user: user };
      return responseHelper.success(res, responseData, message);
    } else {
      let err = "User not exist";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};


module.exports = {
   
  login,
  signup,
  user,
  sentForgotPinCodeViaEmail, //f
  verifyForgotPinCode, //f
  resetPassword, //f
};
