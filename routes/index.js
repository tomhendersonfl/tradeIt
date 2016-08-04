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
  res.render('index', { title: 'Trade It', current_user_id:req.cookies.userid });
})

router.get('/dashboard', function(req, res, next){
  Tenders.all().then(function(tenders){
    if(tenders.rows.length > 20){
      tenders.rows.splice(20)
    }
    if(FbInfo.facebook_id){
      Users.findByFacebookId(FbInfo.facebook_id).then(function(user){
        Bids.all().then(function(bids_sent){
          res.render('dashboard', {tenders:tenders.rows,
            bids_sent:bids_sent.rows,
            current_user_id:req.cookies.userid
          });
        })
      })
    } else {
      res.render('dashboard', {tenders:tenders.rows, current_user_id:req.cookies.userid});
    }
  })
});

router.get('/FAQ', function(req, res, next) {
  res.render('FAQ', { title: 'Trade It', current_user_id:req.cookies.userid });
})

router.get('/contact', function(req, res, next){
  res.render('contact', {current_user_id:req.cookies.userid});
})

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { title: 'Trade It', current_user_id:req.cookies.userid });
});

function findSentBids(bids, id){
  var sentBids = [];
  bids.forEach(function(bid){
    if(bid.user_id === Number(id)){
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

module.exports = router;
