var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Tenders = require('../models/tenders');
var Bids = require('../models/bids');

//pending bids
router.get('/sent', function(req, res, next) {
  Tenders.all().then(function(tenders){
    res.render('bids_sent/index', { tenders:tenders.rows,
      message:'When user clicks accept offer on biddee show page, user is directed to meetup form',
      current_user_id:req.cookies.userid
    });
  })
});

router.post('/', function(req, res, next){
  Bids.create(req.body, function(bid){
    res.redirect('/dashboard')
  })
})

router.post('/:id/accept', function(req, res, next){
  Bids.accept(+req.params.id, function(bid){
    res.redirect('/dashboard')
  })
})

router.post('/:id/reject', function(req, res, next){
  Bids.reject(req.params.id, function(bid){
    res.redirect('/dashboard')
  })
})

router.get('/sent/:id', function(req, res, next) {
  Tenders.find(req.params.id).then(function(tenders){
  res.render('bids_sent/show', {
    tenders: tenders.rows[0],
    message:'Seeing a single bids page',
    current_user_id:req.cookies.userid
    })
  })
});

router.get('/:id/meetup', function(req, res, next) {
  res.render('bidder/meetup_form', {title: "Lets Meet Up!",current_user_id:req.cookies.userid})
});

router.get('/received', function(req, res, next) {
  res.render('bids_received/index',{current_user_id:req.cookies.userid});
});

module.exports = router;
