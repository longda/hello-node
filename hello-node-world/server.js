'use strict';

// var Http = require('http');
// var Express = require('express');
// var BodyParser = require('body-parser');
// var Swaggerize = require('swaggerize-express');
// var Path = require('path');
//
// var App = Express();
//
// var Server = Http.createServer(App);
//
// App.use(BodyParser.json());
// App.use(BodyParser.urlencoded({
//     extended: true
// }));
//
// App.use(Swaggerize({
//     api: Path.resolve('./config/swagger.json'),
//     handlers: Path.resolve('./handlers')
// }));
//
// Server.listen(8000, function () {
//     App.swagger.api.host = this.address().address + ':' + this.address().port;
//     /* eslint-disable no-console */
//     console.log('App running on %s:%d', this.address().address, this.address().port);
//     /* eslint-disable no-console */
// });

var port = process.env.PORT || 8000;

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var swaggerize = require('swaggerize-express');
var swaggerUi = require('swaggerize-ui');
var path = require('path');

var app = express();

var server = http.createServer(app);

app.use(bodyParser.json());

app.use(swaggerize({
    api: path.resolve('./config/swagger.json'),
    handlers: path.resolve('./handlers'),
    docspath: '/swagger'
}));

app.use('/docs', swaggerUi({
  docs: '/swagger'
}));

server.listen(port, function () {
      /* eslint-disable no-console */
      console.log('App running on %s:%d', this.address().address, this.address().port);
      /* eslint-disable no-console */
});
