'use strict';

const express = require('express');
const router = express.Router();

let auth = {
  index: function (req, res, next) {
    res.json('heroku auth is running ..........');
  }
};

router.get('/', auth.index);
module.exports = router;
