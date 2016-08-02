var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Tenders(){
  return knex('tenders');
};

router.get('/', function(req, res, next) {

  res.render('index', { title: 'Trade It' });

  Tenders().select().then(function(tenders){
    res.render('index', { tenders:tenders, title: 'Trade It' });
  })
})


module.exports = router;
