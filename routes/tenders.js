var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Logic = require('../models/tenders')

function Tenders(){
  return knex('tenders');
};

router.get('/', function(req, res, next) {
  Tenders().select().then(function(tenders){
    res.render('tenders/index', {tenders:tenders});
  })
});

router.get('/:id', function(req, res, next) {
  Logic.find(req.params.id).then(function(tenders){
    console.log(tenders);
    res.render('tenders/show', {tenders:tenders.rows[0]});
  })
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
