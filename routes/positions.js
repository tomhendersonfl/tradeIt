var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var FbInfo = require('../models/fbInfo');
var Mapkey = require('../models/mapkey');

function Users(){
  return knex('users')
}

router.get('/', function(req, res, next) {
  Users().select('position').then(function(positions){
    res.json(positions);
  })
})

module.exports = router;
