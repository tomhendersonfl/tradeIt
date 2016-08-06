var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Logic = require('../models/tenders');
var Bids = require('../models/bids');
var Tenders = require('../models/tenders');

function Tenders(){
  return knex('tenders');
};

router.get('/', function(req, res, next) {
  Tenders.findByNotUserPublished(req.cookies.userid).then(function(tenders){
    res.render('tenders/index', {tenders:tenders.rows, current_user_id:req.cookies.userid});
  })
});

router.get('/new', function(req, res, next) {
  res.render('tenders/new', { current_user_id:req.cookies.userid});
});

router.post('/', function(req, res, next) {
  Logic.create(req.body, req.cookies.userid, function(tender){
      res.render('tenders/edit', {tender:tender, current_user_id:req.cookies.userid});
  })
});

router.post('/:id', function(req, res, next) {
  Logic.updateOne(req.body, req.cookies.userid, function(error){
    console.log(req.body);
      res.redirect('/dashboard')
  })
});

router.post('/:id/publish', function(req, res, next) {
  Logic.publish(req.body, req.cookies.userid, function(){
      res.redirect('/dashboard')
  })
});

router.get('/:id/delete', function(req, res, next) {
  Tenders.destroy(req.params.id, req.cookies.userid, function(errors){
      console.log("errors");
      console.log(errors);
      res.redirect('/dashboard')
  })
});

router.get('/:id', function(req, res, next) {
  Logic.find(req.params.id).then(function(tenders){
    res.render('tenders/show', {tenders:tenders.rows[0], current_user_id:req.cookies.userid, user_id:req.cookies.userid});
  })
});


module.exports = router;
