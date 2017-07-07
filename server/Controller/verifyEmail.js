/**
 * verifying email for changing password
 * @path Controller/verifyEmail.js
 * @file verifyEmail.js
 * @Scripted by Prajakta Tatkare
 */

/*
 * Module dependencies
 */

var express = require('express');
router = express.Router();
var User = require('../Model/index.js');
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
var conf = require('../Config/config.js');
  var winston = require('winston');




/**
 * router - Verifys email and sends link to the registered email to change the password
 *
 * @param  {type} '/'             description
 * @param  {Object} function(req  Object having  email entered for verification
 * @param  {Object} res           sends link to registered email

 */
router.put('/', function(req, res) { //post call for api verifyEmail.js
  try {

    /**
     * User - description
     *
     * @param  {Object} req.body     Object having  email entered for verification
     * @param  {Object} function(err callback error
     * @param  {Object} data          Object with status and message

     */
    User.verifyEmail(req.body, function(err, data) {
        if (data)

        {
          //generating token from email
            var token = jwt.sign({
                email: data.local.email
            }, conf.TOKEN_SECRET, {
                expiresIn: 60 * 60 * 24
            });

          //sending email to the user  with link to change password
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'rani6172@gmail.com',
                    pass: 'welcome.123'
                },

            }, {
                from: 'Prajakta Tatkare <rani6172@gmail.com>'
            });
            //
            console.log('SMTP Configured');

            // Message object
            let message = {

                // Comma separated list of recipients
                to: data.local.email,
                // Subject of the message
                subject: 'Reset Password',

                // plaintext body
                text: 'Hello to myself!',


                html: '<p>click on the below link to change password</p>' +
                    '<a href="http://localhost:8081/#!/changePassword/' + token + '"> http://localhost:8081/#!/changePassword/"' + token + '</a>',






            };

            console.log('Sending Mail');
            transporter.sendMail(message, (error, info) => {
                if (error) {
                    winston.error("Error occurred while sending mail");
                    console.log('Error occurred');
                    console.log(error.message);
                    return;
                }



                winston.info("Eamil sent successfully");
                console.log('Message sent successfully!');
                console.log('Server responded with "%s"', info.response);
                transporter.close();

            });



            res.send({
                "Email": data.email,
                "status": true,
                "token":token
            })
            //


        } else {
          winston.error("Not a Registered Email");

            res.send({
                message: "err",
                "status": false
            })
        }

    });



  } catch (error) {
        winston.error(error);
    res.send({
        "message": error,
        "status": false
    })
  }





});
module.exports = router;
