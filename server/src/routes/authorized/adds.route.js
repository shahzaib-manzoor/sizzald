/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();
var permit = require("../../middlewares").permit;
const controller = require("../../controllers").adds;

//@route    GET Adds
//@desc      
//@access   Private
router.get("/", controller.getAll);
//@route    POST Add
//@desc   
//@access   Private
router.post("/",  controller.addOne);
//@route    Update Add
//@desc     
//@access   Private
router.put("/:id", controller.updateOne);
//@route    GET One Add
//@desc   
//@access   Private
router.get("/:id", controller.getOne);
//@route    DELETE Add
//@desc      
//@access   Private
router.delete("/:id", controller.deleteOne);
//@route    GET Adds By app_name
//@desc      
//@access   Private

router.get('/v1/:app_name',controller.findByAppName)

module.exports = router;
