var express     = require('express');
var app         = express();
var logger      = require('morgan');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var apiRouter   = require('./routes/api_routes.js');
var port        = process.env.PORT || 3000;
var database    = 'mongodb://localhost/encrypt';

// set middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connect to database
mongoose.connect(database, function() {
  console.log('Successfully connected to database: ' + database);
});

app.use('/api', apiRouter);

app.listen(port, function() {
  console.log('Application server started successfully on port: ' + port);
});
