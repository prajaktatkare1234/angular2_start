

var express = require('express');
var app = express();
var router = express.Router();
var User = require('../Model/index.js');
// var config=require('../Config/index.js')
var winston=require('winston');
var jwt = require('jsonwebtoken');
var conf = require('../Config/config.js');





router.post('/', function(req, res) { //post call for api signUp.js





   try{


           User.saveUser(req.body, function(err, result) {

             if (err) {
               winston.error("Registration failed ");
               res.send({
                 "status": false,
                 "message": err
               });
             } else {
               winston.info("Registered successfully");
               res.send({
                 "status": true,
                 "message": "Registered Successfully"
               });
             }


           });




 }
 catch (e) {
   res.send({"message":e})
 }

});













module.exports = router;
