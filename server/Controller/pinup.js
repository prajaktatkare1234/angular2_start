
 /**
  * This class requires the modules {@link module:xyzcorp/helper} and
  * {@link module:xyzcorp/helper.ShinyWidget#polish}.
  * @class
  * @requires module:express
  * @requires express
  */
var express = require('express');

/**
 * @desc ToDo route initilization
 */
var router = express.Router();
var User = require('../Model/dataCard.js');
var winston=require('winston');

/**
 * router - marks data card as pinned and unpinned
 *
 * @param  {String} '/:id'          id of data card
 * @param  {Object} function(req    Object having values for pin and archive
 * @param  {type} res               Object having data card details

 */
 /**
  * @function
  * @name myFunction
  * */
router.post('/:id', function(req, res) { //post call for api pinup.js
  try {
    var data_id=req.params.id; //fetching user id from api url

    User.pinned(data_id,req.body,function(err, result) {


      if(err){
        winston.error("failed to pin the card");
        res.send({
                "status": false,
                "message": err


      })
    }
      else{
          winston.info("pinned data card");
        res.send({
                  "status": true,
                  "message": "pinned",


      })
    }
});
  } catch (error) {
        winston.error(error);
    res.send({
        "status": false,
        "message": error

    });

  }
});
module.exports = router;
