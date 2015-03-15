'use strict';
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT = process.env.PORT || 8080;

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var validator = require('validator');
var nodemailer = require('nodemailer');

var mailConfig = require('./data/smtp');
var transport = nodemailer.createTransport(mailConfig);

var app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(express.static('www/'));

app.get('/api/sponsors', function(req, res){
  res.json(require('./data/sponsors'));
});

app.post('/api/messages', function(req, res, next){
  if(!req.body.email){
    return next(new Error('Une adresse mail est requise.'));
  }
  else if(!req.body.message){
    return next(new Error('Un message est requis.'));
  }
  else if(!validator.isEmail(req.body.email)){
    return next(new Error('L\'email fourni est invalide.'));
  }

  var email = req.body.email;
  var message = req.body.message;

  var tos = require('./data/mails');
  tos.forEach(function(to){
    console.log('Envoi pour %s', to);
    transport.sendMail({
      to: to,
      from: mailConfig.auth.user,
      subject: '[ASC] Nouveau message de ' + email,
      text: message
    }, function(err, response){
      if(err){
        console.log('Erreur mail');
        return next(err);
      }
      else {
        res.status(200)
        .json({
          message: 'Message envoyé'
        });
      }
    });
  });
});

app.use(function(err, req, res, next){
  res.status(403).json({message: err.message});
});

var server = http.createServer(app);

server.listen(port, function(){
  console.log('Server listening on port %s', port);
})