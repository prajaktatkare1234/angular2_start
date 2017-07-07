

var express = require('express');
var app = express();
var morgan=require('morgan');
var winston=require('winston');
// var nodemailer=require('nodemailer');
var path= require('path');
// const signUp=require("./server/Controller/signUp")




var bodyParser = require('body-parser');
var validator=require('express-validator');


var config=require('./server/Config/config.js');

var p = process.env.PORT || 4200

app.use(morgan("dev"));



winston.configure({
  transports: [
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'filelog-info.log',
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: 'filelog-error.log',
      level: 'error'


    })
  ]
});

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended:true,limit: '10mb'}));
app.use(express.static(path.join(__dirname,'./dist')));
// app.use('/',signUp);
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.use(validator());

app.use(require('./server/Controller'));
var server = app.listen(p, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Todo App listening at http://%s:%s", host, port)





});
