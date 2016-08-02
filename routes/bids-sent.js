var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('bidder/index', {
    title: "When user is on bidder index page and clicks on an offer, user is directed to bidder view page"
  });
});

router.get('/:id', function(req, res, next) {
  res.render('bidder/show', {
    title: "Meet Up"
  })
});
module.exports = router;
