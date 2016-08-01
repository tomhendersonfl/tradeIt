var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Tenders(){
  return knex('tenders');
};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trade It' });
});

router.get('/dashboard', function(req, res, next){
  Tenders().select().then(function(tenders){
    res.render('dashboard', {tenders:tenders});
  });
})

module.exports = router;
