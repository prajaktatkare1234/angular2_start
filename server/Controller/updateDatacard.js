/**
 * update card data
 * @path Controller/updateDatacard.js
 * @file updateDatacard.js
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
 * router - update data card
 *
 * @param  {String} '/:id'        id of data card
 * @param  {Object} function(req  Object having datacard details
 * @param  {Object} res           Object having status and message
 */
router.post('/:id', function(req, res) { //post call for api updateDatacard.js
  try {
    var data_id=req.params.id;//fetching data card id from api url

    /**
     * User - UserSchema
     *
     * @param  {String} data_id      id of data card
     * @param  {Object} req.body     Object having datacard details
     * @param  {Object} function(err callback error
     * @param  {Object} result       Object having status,message and updated data contents

     */
    User.updateData(data_id,req.body, function(err, result) {


      if(err){
        winston.error("failed to update data card");
        res.send({
                "status": false,
                "message": err


      })
    }
      else{
          winston.info("updated data card successfully");
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
