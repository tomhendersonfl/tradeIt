var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Tenders = require('../models/tenders');
var Bids = require('../models/bids');
var Users = require('../models/users');
var FbInfo = require('../models/fbInfo');

router.get('/', function(req, res, next) {
  if(!req.cookies.userid){
    res.cookie('userid', 100);
  }
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
    // console.log(FbInfo.facebook_id);
    if(FbInfo.facebook_id){
      Users.findByFacebookId(FbInfo.facebook_id).then(function(user){
        res.render('dashboard', {tenders:tenders.rows});
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
