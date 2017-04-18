var express = require('express'),
  path = require('path'),
  app = express(),
  server = require('http').createServer(app).listen(3000);

app.use(express.static(path.join(__dirname, '../client/games/bingo/')));
console.log("server is running with 3000 port");
