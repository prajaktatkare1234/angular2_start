/**
 * select bg color
 * @path Controller/bgColor.js
 * @file bgColor.js
 * @Scripted by Prajakta Tatkare
 */

/*
 * Module dependencies
 */


var express = require('express');
var router = express.Router();
var User = require('../Model/mobileSchema.js');
var winston=require('winston');
/**
 * @desc applies background color to data card
 */


/**
 * router - applies background color to data card
 *
 * @param  {String} '/:id'       id of the data ccrad
 * @param  {Object} function(req object  having card color and userId
 * @param  {Object} res          Object having status and message
 */
router.post('/', function(req, res) {  //post call for bgColor.js
  try {
    //fetching data card id from api url
    // var data_id=req.params.id;
    // call to selectColor function

    /**
     * User - userSchema
     *
     * @param  {String} data_id      id of the data card
     * @param  {Object} req.body     Object having color and userId
     * @param  {Object} function(err call back error
     * @param  {Object} result       data card details
     */
    User.mobileData(req.body,function(err, result) {


      if(err){
          winston.error("failed to store data");
        res.send({
                "status": false,
                "message": err


      })
    }
      else{
        winston.info("data stored");
        res.send({
                  "status": true,
                  "message": result


      })
    }
});

  } catch (error){
        winston.error(error);



    res.send({
            "status": false,
            "message": error


  })
  }

});
module.exports = router;
