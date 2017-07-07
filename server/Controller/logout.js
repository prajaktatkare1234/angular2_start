/**
 * logout from account
 * @path Controller/logout.js
 * @file logout.js
 * @Scripted by Prajakta Tatkare
 */

 /**
 * Module dependencies
 */

var express=require('express');
router=express.Router();
var winston=require('winston');

/**
 * router - clears cookie
 *
 * @param  {type} '/'          description
 * @param  {type} function(req none
 * @param  {type} res          clears cookie and gives Object having status and message
 * @return {type}              description
 */
router.post('/',function(req,res){ //post call for api logout.js
  try {
    res.clearCookie('cookie');
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
