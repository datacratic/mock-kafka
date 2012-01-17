#!/usr/bin/env node

var net = require('net'),
    fs = require('fs');

var mockResponse = fs.readFileSync('lipsum_fetch.bin');
var server = net.createServer(function (c) {
  console.log('new connection');
  var buffer = new Buffer(256);

  c.on('data', function (data) {
    console.log(data);
    //buffer.write(data)
    c.end(mockResponse);
  });

  c.on('end', function () {
    console.log('ready to respond');
  });
});

console.log('Server listening on port 9191');
server.listen(9191, 'localhost');
