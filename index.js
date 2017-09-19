'use strict';

const express = require('express');
const app = express();

let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let csrf = require('csurf');
let helmet = require('helmet');
let mongoose = require('mongoose');

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

/* Routings */
require(__dirname + '/routes')(app);

app.listen(app.get('port'), function () {
  console.log('Application listning on port '+ app.get('port'));
});
