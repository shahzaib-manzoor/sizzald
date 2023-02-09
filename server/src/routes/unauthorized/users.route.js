/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();
const { forgotJwtAuth } = require("../../helpers/jwt.helper");
const controller = require("../../controllers").user;
const referralController = require("../../controllers").referral;

 
router.post("/login", controller.login);
//@route    POST auth/signup
//@desc     Sign up user (create user account)
//@access   Public
router.post("/signup", controller.signup);

//@route    POST auth/forgotemail
//@desc     sent email to user for fotgot password
//@access   Public
router.post("/forgotemail", controller.sentForgotPinCodeViaEmail);

//@route    POST auth/verifyforgotpin
//@desc     verify pin code in db
//@access   private
router.post("/verifyforgotpin", forgotJwtAuth, controller.verifyForgotPinCode);

//@route    POST auth/resetpassword
//@desc     reset password
//@access   private
router.post("/resetpassword", forgotJwtAuth, controller.resetPassword);
router.get("/getCode/:id", referralController.getOne);
router.get('/get-ip', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.send({ ip });
  });

module.exports = router;
