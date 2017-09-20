'use strict';

const express = require('express');
const app = express();

let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let helmet = require('helmet');
let mongoose = require('mongoose');
let dbHelper = require(__dirname +'/helpers/dbHelper');

/* Set application running port. */
app.set('port', process.env.PORT || 3000);

/* parse application/x-www-form-urlencoded. */
app.use(bodyParser.urlencoded({ extended: false }));

/* parse application/json. */
app.use(bodyParser.json());

/*
  * https://www.npmjs.com/package/helmet
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
*/
app.use(helmet());

/* configure method-override for all request methods */
app.use(methodOverride('_method'));

/* connect mongodb database */
mongoose.connect(dbHelper.connectionString, { useMongoClient: true, promiseLibrary: global.Promise });

/* Log your database connection for development only */
//console.log(dbHelper.connectionString);

/* Routings */
require(__dirname + '/routes')(app);

/* Invalid routing */
app.use('/*', function (req, res, next) {
  res.status(404);
  res.json("The endpoint do not exist.");
});

/* Handle error */
app.use(function(err, req, res, next) {
  res.status(500);
  res.json(err.stack);
});

app.listen(app.get('port'), function () {
  console.log('Application listning on port '+ app.get('port'));
});
