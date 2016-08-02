var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var User_Logic = require('../models/users')
var Tender_Logic = require('../models/tenders')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  User_Logic.find(req.params.id).then(function(users){
  Tender_Logic.allUser(req.params.id).then(function(tenders){
    res.render('users/show', { users:users.rows[0], tenders:tenders.rows });
  })
  })
});

module.exports = router;
