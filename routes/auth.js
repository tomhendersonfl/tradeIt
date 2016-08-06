var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var passport = require('passport');
var userState = require('../models/userstate');
var FbInfo = require('../models/fbInfo');
var Users = require('../models/users');

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),function(req, res, next){
  res.redirect('/auth/login')
});

router.get('/auth/logout', function(req, res, next){
  res.cookie('userid',100);
  FbInfo.facebook_id = 'undefined';
  req.session.destroy(function(err){
      res.redirect('/')
    })
});

router.get('/auth/login', function(req, res, next){
  if (userState.status == 'not_found'){
    res.redirect('/users/new')
  } else {
    Users.findByFacebookId(FbInfo.facebook_id).then(function(user){
      res.cookie('userid',user.rows[0].id);
    }).then(function(){
        res.redirect('/dashboard');
    })
  }
});

module.exports = router;
