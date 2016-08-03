var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var User_Logic = require('../models/users')
var Tender_Logic = require('../models/tenders')

router.get('/', function(req, res, next) {
  if (userState.state!= "valid"){
    res.redirect("the login place")
  } else {
    res.send('respond with a resource');
  }
});

router.get('/new', function(req, res, next){
  res.render('users/signup');
});

//need to get the :id from facebook cookie
router.get('/:id', function(req, res, next) {
  User_Logic.find(req.params.id).then(function(users){
    Tender_Logic.all(req.params.id).then(function(tenders){
      res.render('users/show', { users:users.rows[0], tenders:tenders.rows });
    })
  })
});
//need to get the :id from facebook cookie
router.get('/:id/edit', function(req, res, next) {
  User_Logic.find(req.params.id).then(function(user){
    console.log(user.rows[0]);
    res.render('users/edit', {user:user.rows[0]});
  })
});

//need to get the :id from facebook cookie
router.post('/:id/edit', function(req, res, next) {
  User_Logic.updateOne(req.body).then(function(){
    res.redirect('/dashboard');
  })
});

module.exports = router;
