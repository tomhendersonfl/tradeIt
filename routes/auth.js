var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var passport = require('passport')

function Tenders(){
  return knex('tenders');
};

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),function(req, res, next){
  res.redirect('/auth/login')
});


router.get('/auth/logout', function(req, res, next){
    console.log(req.user)
  req.session.destroy(function(err){
      res.redirect('/')
    })
})
router.get('/auth/login', function(req, res, next){
  
  res.redirect('/')
})
module.exports = router;
