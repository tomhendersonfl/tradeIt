var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  res.render('bids_sent/index', { title: 'Trade It' });
})

module.exports = router;
