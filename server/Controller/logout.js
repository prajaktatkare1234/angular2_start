

var express=require('express');
router=express.Router();
var winston=require('winston');
var localStorage = require('localStorage')


router.post('/',function(req,res){ //post call for api logout.js
  try {
    console.log("logout dfdsf");

  localStorage.removeItem('mobile');
  console.log("Dfsafd");
    winston.info("logged out Successfully");
    res.send({"status":false,"message":"logged out"});

  } catch (error) {
        winston.error(error);
    res.send({
        "status": false,
        "message": error

    });
  }



});
module.exports=router;
