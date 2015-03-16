'use strict';
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT = process.env.PORT || 8080;
var client = 'www/';
if(env === 'production') client = 'build/';


// Import des modules
//   -> http + express = création du serveur
//   -> compression pour optimiser les perfs réseau
//   -> validator = valider le format des données (email,...)
//   -> nodemailer = envoi de mail
//   -> q = gestion des opérations asynchrones
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var validator = require('validator');
var nodemailer = require('nodemailer');
var q = require('q');

// Création du transport pour l'envoi de mail.
// Penser à créer le fichier data/smtp.js ou data/smtp.json
// Voir l'exemple dans le fichier data/smtp.sample.js
var mailConfig = require('./data/smtp');
var transport = nodemailer.createTransport(mailConfig);

// Création du serveur et ajout des premiers middleware
var app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(express.static(client));

// Retourne les sponsors qui sont affichés dans le site.
app.get('/api/sponsors', function(req, res){
  res.json(require('./data/sponsors'));
});

// Intercepte les messages envoyés via le formulaire et les transmet 
// par email.
// Pour gérer les destinataires, voir le fichier data/mails.js
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

  // Import des destinataires
  var tos = require('./data/mails');

  // Tableau qui interceptera toutes les promesses associées
  // à l'envoi des emails.
  // Si tous on réussi, on renvoie un succes, sinon un échec (403)
  var promises = [];

  // Envoi pour chaque destinataire
  tos.forEach(function(to){
    var deferred = q.defer();
    promises.push(deferred.promise);

    // Envoi de l'email
    transport.sendMail({
      to: to,
      from: mailConfig.auth.user,
      subject: '[ASC] Nouveau message de ' + email,
      text: message
    }, function(err, response){
      if(err){
        deferred.reject(err);
      }
      else {
        deferred.resolve(response);
      }
    });
  });

  q.all(promises)
  // Tous les emails ont étés acheminés.
  .then(function(){
    res.json({message: 'Message envoyé'});
  })
  // Au moins un a échoué.
  .catch(function(){
    next(new Error('Mail non envoyé'));
  });
});

// Gestionnaire d'erreur
app.use(function(err, req, res, next){
  res.status(403).json({message: err.message});
});

var server = http.createServer(app);

server.listen(port, function(){
  console.log('Server listening on port %s in %s mode', port, env);
})