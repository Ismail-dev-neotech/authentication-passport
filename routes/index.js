'use strict';

module.exports = function (app) {
  app.get('/', function (req, res) { res.end('Hello there!! The API is at /api'); });
  app.get('/api', function (req, res) { res.end('Hello there!! This is api ... over'); });
  app.use('/api/auth/heroku', require('./../controllers/auth_controllers/herokuAuthController'));
};
