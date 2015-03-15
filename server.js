'use strict';
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT = process.env.PORT || 8080;

var http = require('http');
var express = require('express');
var compression = require('compression');

var app = express();
app.use(compression());
app.use(express.static('www/'));

app.get('/api/sponsors', function(req, res){
  res.json(require('./data/sponsors'));
});

var server = http.createServer(app);

server.listen(port, function(){
  console.log('Server listening on port %s', port);
})