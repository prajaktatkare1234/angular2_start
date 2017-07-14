/*
 * userSchema
 * @path model/index.js
 * @file index.js
 */

/*
 * Module dependencies
 */

var mongoose = require('mongoose');
validators = require('mongoose-validators');
var unique_val = require('mongoose-unique-validator');
var express = require('express');
// var app = express();
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../Config/config.js');

var Schema = mongoose.Schema;
/**
 * @schema userSchema
 * @description user details
 */
var mobileSchema = Schema({
    // local:{
      name: {
          type: String,
          // required: true,
          // validate: validators.isAlpha(),

      },
      description: {
          type: String,
          // unique: true,
          // required: true,
          // validate: validators.isEmail()
      },
      image: {
          small: String,

          // minlength: 5,

      },
      storage:{
        type:String
      },
      ratings: {
        type :String
      },
      cost:{
        type:String
      },
      os:{
        type:String
      },
      Camera:{
        type:String
      }




});


/**
* create new user
* @return {Error} err
* @return {User} user
* @api For public
*/
mobileSchema.statics.mobileData = function(req, cb) {
  console.log("in saveUser",req);
  // var pwd = req.upassword;

  var encrypt = encrypt_data(pwd);
  var mobile_Detail = new this({
    name: req.name,
    description: req.description,
    // 'image.small':req.small,
    storage:req.storage,
    ratings:req.ratings,
    cost:req.cost,
    os:req.os,
    camera:req.camera

  });
  mobile_Detail.save(cb);
};




//
// function encrypt_data(pwd) { //function to encrypt password
//     var cipher = crypto.createCipher(config.algorithm, config.password)
//     var crypted = cipher.update(pwd, 'utf8', 'hex')
//     crypted += cipher.final('hex');
//     return crypted;
// }



// userSchema.statics.login = function(req, cb) {
// var encPass =encrypt_data(req.password)
//     this.findOne({
//         email: req.email,dataCard
//
// /**
//  * Setting profile pic for user
//  *
//  * @param {String} name
//  * @return {Error} err
//  * @return {User} user
//  * @api user
//  */
//  userSchema.statics.changeProfilepic = function(req,url,cb) {
//    this.update({
//      'local.name': req.name
//    }, {
//      $set: {
//        'local.profile_pic':url.profile_pic,
//        'local.original_pic':url.original_pic
//
//      }
//    }, cb);
//  };
//
// /**
//  * Find User by its id
//  *
//  * @param {String} id
//  * @return {Error} err
//  * @return {User} user
//  * @api user
//  */
//  userSchema.statics.profile=function(req,cb){
//
//    this.findOne({_id:req._id},cb);
//
//  };
//
// /**
//  * Find User by its email
//  *
//  * @param {String} email
//  * @return {Error} err
//  * @return {User} user// userSchema.statics.login = function(req, cb) {
// var encPass =encrypt_data(req.password)
//     this.findOne({
//         'local.email': req.email,
//         'local.password':encPass
//     }, cb);
// };
//
// /**
//  * Setting profile pic for user
//  *
//  * @param {String} name
//  * @return {Error} err
//  * @return {User} user
//  * @api user
//  */
//  userSchema.statics.changeProfilepic = function(req,url,cb) {
//    this.update({
//      'local.name': req.name
//    }, {
//      $set: {
//        'local.profile_pic':url.profile_pic,
//        'local.original_pic':url.original_pic
//
//      }
//    }, cb);
//  };
//
// /**
//  * Find User by its idconsole.log("in index of controller");
//  * @return {User} user
//  * @api user
//  */
//  userSchema.statics.profile=function(req,cb){
//
//    this.findOne({_id:req._id},cb);
//
//  };
//
// /**
//  * Find User by its email
//  *user_Detail
//  * @param {String} email
//  * @return {Error} err
//  * @return {User} user
//  * @api user
//  */
//
// };
//
// /**
//  * Find User by its email and change password
//  *
//  * @param {String} email
//  * @return {Error} err
//  * @return {User} user
//  * @api user
//  */
//  userSchema.statics.changePassword=function(req,email,cb){
//    var encrypt = encrypt_data(req.password);
//    this.update({
//      'local.email': email//  */
//
// };
//
// /**
//  * Find User by its email and change password
//  *
//  * @param {String} email
//  * @return {Error} err

//    }, {
//      $set: {
//        'local.password':encrypt
//      }
//    }, cb);
//  };
//
//
//
//  /**
//   * @description Expose `User` Model
//   */
//  * @api user
//  */
// userSchema.statics.verifyEmail=function(req,cb){
//
// };
//
// /**
//  * Find User by its email and change password
//  *
//  * @param {String} email
//  * @return {Error} err
//  * @return {User} user
//  * @api user
//  */
//  userSchema.statics.changePassword=function(req,email,cb){
//    var encrypt = encrypt_data(req.password);
//    this.update({userSchema
//      'local.email': email
//    }, {
//      $set: {
//        'local.password':encrypt
//      }
//    }, cb);
//  };
//
//
//
//  /**
//   * @description Expose `User` Model
//   */

var User = mongoose.model('mobileData', mobileSchema);

module.exports = User;
