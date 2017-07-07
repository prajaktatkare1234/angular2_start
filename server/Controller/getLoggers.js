/**
 * Adding activity logger
 * @path Controller/getLoggers.js
 * @file Logger.js
 * @Scripted by Prajakta Tatkare
 */

/*
 * Module dependencies
 */

var express = require('express');
var router = express.Router();


var conf = require('../Config/config.js');
var config=require('../Config/index.js')
var User = require('../Model/index.js');
var winston=require('winston');
var logger= require('../Model/logger.js')

/**
 * router - get activities
 *
 * @param  {type} '/'             description
 * @param  {Object} function(req  Object having userId and data card title
 * @param  {Object} res           Object having activity data
 * @return {type}                 description
 */
router.post('/', function(req, res) { //post call for api getLoggers.js

  try {

    /**
     * logger - loggerSchema
     *
     * @param  {Object} req.body     Object having userId and data card title
     * @param  {Object} function(err call back error
     * @param  {Object} result       Object having activity data

     */
    logger.getLoggers(req.body, function(err, result) {



        if (err) {
          winston.error("login failed");
            res.send({
                "status": false,
                "message": " failed to get loggers"

            });
        }
            if (result) {
              winston.info("successfully fetched activities");




                res.send({
                    "status": true,

                    "result":result
                })
            } else {
                  winston.error("failed to get activities");
                res.send({
                    "status": false,
                    "message": "login failed"

                });

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
