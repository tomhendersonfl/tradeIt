var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Tenders = require('../models/tenders');
var Bids = require('../models/bids');
var Users = require('../models/users');
var FbInfo = require('../models/fbInfo');
var Helpers = require('../models/helpers')

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
        res.render('dashboard', {tenders:tenders.rows, current_user_id:req.cookies.userid});
        Bids.all().then(function(bids){
          var sentBids = Helpers.findSentBids(bids.rows);
          console.log(sentBids);
          var recBids = Helpers.findReceivedBids(bids.rows);
          res.render('dashboard', {tenders:tenders.rows,
            sentBids:sentBids,
            recBids:Helpers.findReceivedBids(bids.rows),
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

module.exports = router;
