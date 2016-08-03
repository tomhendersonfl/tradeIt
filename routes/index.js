var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Tenders = require('../models/tenders');

function Users (){
  return knex('users');
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trade It' });
});


router.get('/dashboard', function(req, res, next){
  Tenders.all().then(function(tenders){
    res.render('dashboard', {tenders:tenders.rows});
  })
})

router.get('/FAQ', function(req, res, next) {
  res.render('FAQ', { title: 'Trade It' });
})

router.get('/contact', function(req, res, next){
  res.render('contact');
})

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { title: 'Trade It' });
});

module.exports = router;
