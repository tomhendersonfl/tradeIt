var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Tenders = require('../models/tenders');
var Bids = require('../models/bids');
var Users = require('../models/users');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trade It' });
})

function findSentBids(bids){
  var sentBids = [];
  bids.forEach(function(bid){
    if(bid.user_id === req.cookies.userid){
      sentBids.push(bid);
    }
  })
  return sentBids;
}

function findReceivedBids(bids){
  var recBids = [];
  bids.forEach(function(bid){
    if(bid.username === (user.first_name+' '+user.last_name)){
      recBids.push(bid);
    }
  })
  return recBids;
}

router.get('/dashboard', function(req, res, next){
  Tenders.all().then(function(tenders){
    if(tenders.rows.length > 20){
      tenders.rows.splice(20)
    }
    if(req.cookies.userid){
      Users.findByFacebookId(req.cookies.userid).then(function(user){
        Bids.all().then(function(bids){
          var sentBids = findSentBids(bids.rows);
          var recBids = findReceivedBids(bids.rows);
          res.render('dashboard', {tenders:tenders.rows,
            sentBids:sentBids,
            recBids:recBids
          });
        })
      })
    } else {
      res.render('dashboard', {tenders:tenders.rows});
    }
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
