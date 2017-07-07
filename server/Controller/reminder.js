/**
 * Adding reminder to card
 * @path Controller/reminder.js
 * @file reminder.js
 * @Scripted by Prajakta Tatkare
 */

/*
 * Module dependencies
 */

var express = require('express');
var router = express.Router();
var User = require('../Model/dataCard.js');
var winston=require('winston');


/**
 * router - Setting reminder
 *
 * @param  {String} '/:id'        id of the data card
 * @param  {Object} function(req  Object having data card details and userId
 * @param  {Object} res           Object having status and message
 */
router.post('/:id', function(req, res) { //post call for api reminder.js
  try {
    var data_id=req.params.id;//fetching user id fromapi url


    User.remind(data_id,req.body,function(err, result) {


      if(err){
        winston.error("failed to set reminder");
        res.send({
                "status": false,
                "message": err


      })
    }
      else{
        winston.info("reminder set Successfully");
        res.send({
                  "status": true,
                  "message": result,


      })
    }
});

  } catch (error) {
        winston.error(error);
    res.send({
            "status": false,
            "message": error


  })
  }

});
module.exports = router;
