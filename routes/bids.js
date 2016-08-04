var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Tenders = require('../models/tenders');

router.get('/sent', function(req, res, next) {
  Tenders.all().then(function(tenders){
    res.render('bids_sent/index', { tenders:tenders.rows,
      message:'When user clicks accept offer on biddee show page, user is directed to meetup form',
      current_user_id:req.cookies.userid
    });
  })
});

router.get('/sent/new', function(req, res, next) {
  res.render('bids_sent/new',{current_user_id:req.cookies.userid});
});

router.get('/sent/:id', function(req, res, next) {
  Tenders.find(req.params.id).then(function(tenders){
  res.render('bids_sent/show', {
    tenders: tenders.rows[0],
    message:'Seeing a single bids page',
    current_user_id:req.cookies.userid
    })
  })
});

router.get('/:id/new', function(req, res, next) {
  res.render('bidder/new',{current_user_id:req.cookies.userid});
});

router.get('/:id/meetup', function(req, res, next) {
  res.render('bidder/meetup_form', {title: "Lets Meet Up!",current_user_id:req.cookies.userid})
});

router.get('/received', function(req, res, next) {
  res.render('bids_received/index',{current_user_id:req.cookies.userid});
});

module.exports = router;
