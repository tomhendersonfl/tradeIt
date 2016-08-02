var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Tenders = require('../models/tenders')

router.get('/', function(req, res, next) {
  Tenders.all().then(function(tenders){
    console.log(tenders.rows[0]);
    res.render('bidder/index', { tenders:tenders.rows[0],
      message:'When user clicks accept offer on biddee show page, user is directed to meetup form'
    });
  })
})

router.get('/:id', function(req, res, next) {
  Tenders.find(req.params.id).then(function(tenders){
  res.render('bidder/show', {
    tenders: tenders.rows[0],
    message:'Seeing a single bids page'
    })
  })
});

router.get('/:id/meetup', function(req, res, next) {
  res.render('bidder/form', {
    title: "Lets Meet Up!"
  })
});

module.exports = router;
