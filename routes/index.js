var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Tenders = require('../models/tenders');
var Bids = require('../models/bids');
var Users = require('../models/users');
var FbInfo = require('../models/fbInfo');

router.get('/', function(req, res, next) {
    if (!req.cookies.userid) {
        res.cookie('userid', 100);
    }
    res.render('index', {
        title: 'Trade It',
        current_user_id: req.cookies.userid
    });
})

router.get('/dashboard', function(req, res, next) {
    Tenders.findByNotUserPublished(req.cookies.userid).then(function(tenders) {
        Bids.all().then(function(bids) {
            Tenders.findByUser(req.cookies.userid).then(function(myTenders) {
                if (tenders.rows.length > 20) {
                    tenders.rows.splice(20)
                }
                if (myTenders.rows.length > 20) {
                    myTenders.rows.splice(20)
                }
                var bids_sent = [];
                var bids_received = [];
                for (var i = 0; i < bids.rows.length; i++) {
                    if (bids.rows[i].user_id === Number(req.cookies.userid)) {
                        bids_sent.push(bids.rows[i]);

                    } else {
                        bids_received.push(bids.rows[i]);
                    }
                }
                Users.all().then(function(user){
                  var users = user.rows
                  var bidders = {}
                  bids_received.forEach(bidder=>{
                    users.forEach(use=>{
                      if (bidder.user_id == use.id) bidders[bidder.user_id]=use.username
                    })
                  })
                  res.render('dashboard', {
                      tenders: tenders.rows,
                      bids_sent: bids_sent,
                      bids_received: bids_received,
                      current_user_id: req.cookies.userid,
                      myTenders: myTenders.rows,
                      bidders: bidders
                  })
                })

            })
        })
    })
});

router.get('/FAQ', function(req, res, next) {
    res.render('FAQ', {
        title: 'Trade It',
        current_user_id: req.cookies.userid
    });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', {
        current_user_id: req.cookies.userid
    });
});

router.get('/about_us', function(req, res, next) {
    res.render('about_us', {
        title: 'Trade It',
        current_user_id: req.cookies.userid
    });
});

module.exports = router;
