var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Tenders = require('../models/tenders');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trade It' });
});

router.get('/dashboard', function(req, res, next){
  Tenders.all().then(function(tenders){
    res.render('dashboard', {tenders:tenders.rows});
  });
})

module.exports = router;
