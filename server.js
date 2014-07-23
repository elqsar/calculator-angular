var Hapi = require('hapi');
var Path = require('path');

var server = new Hapi.Server('localhost', 3000);

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
      directory: { path: './public', listing: false, index: true }
  }
});

server.start();
