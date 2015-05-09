var express = require('express');
var morgan = require('morgan');
var bodyparser = require('body-parser');
var handlers = require('./handlers');
var app = express();

// parses response body
app.use(bodyparser.json());
// logger
app.use(morgan('dev'));

// routes
app.route('/api/metrics/:id')
  .get(handlers.get)
  .post(handlers.post)
  .put(handlers.put);

// export app for testing
module.exports = app;
