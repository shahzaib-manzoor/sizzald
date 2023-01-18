/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();
var auth = require("../../middlewares").auth;
const validate = require("../../middlewares/validate");
const schema = require("../../validations").addsValidation;
const usersRoutes = require("./users.route");
const addsRoutes = require("./adds.route");
//call appropriate routes

//@route     users
//@desc     inital route
//@access   private
router.use("/users", auth.authenticate, usersRoutes);
router.use("/adds",validate(schema), auth.authenticate, addsRoutes);

module.exports = router;
