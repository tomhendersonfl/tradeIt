
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Logic = require('../models/tenders')

function Tenders(){
  return knex('tenders');
};

router.get('/', function(req, res, next) {
  Tenders().select().then(function(tenders){
    res.render('tenders/index', {tenders:tenders, current_user_id:req.cookies.userid});
  })
});

router.get('/new', function(req, res, next) {
  res.render('tenders/new', { current_user_id:req.cookies.userid});
});

router.post('/', function(req, res, next) {
  Logic.create(req.body).then(function(){
    res.redirect('/tenders');
  })
});

router.get('/:id', function(req, res, next) {
  Logic.find(req.params.id).then(function(tenders){
    res.render('tenders/show', {tenders:tenders.rows[0], current_user_id:req.cookies.userid});
  })
});

module.exports = router;
