var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
<<<<<<< HEAD
var Tenders = require('../models/tenders')

router.get('/', function(req, res, next) {
  Tenders.all().then(function(tenders){
    console.log(tenders.rows);
    res.render('bidder/index', { tenders:tenders.rows,
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
=======

router.get('/', function(req, res, next) {
  res.render('bids_sent/index', { title: 'Trade It' });
})
>>>>>>> 4c9264ba060956776cacc9f79360cfdd9ee23176

module.exports = router;
