var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Tenders(){
  return knex('tenders');
};

router.get('/', function(req, res, next) {
  Tenders().select().then(function(tenders){
    res.render('index', { tenders:tenders, title: 'Trade It' });
  })
})

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
