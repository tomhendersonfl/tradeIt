var knex = require('../db/knex')
var Tenders = require('../models/tenders')
var Users = require('../models/users')
var Bids = require('../models/bids')
var Notes = require('../models/notes')
var Ratings = require('../models/ratings')
var Keywords = require('../models/keywords')
var Questions = require('../models/questions')


// var newTender = Tenders.create({name: 'Lawn Mowing', description: 'Will trade lasw cutting for carpentry', tender_type: 'services', user_id: 2})
// console.log(newTender);

// Tenders.all().then(function(tenders) {
//   console.log("***** testing all method *****");
//   for (i=0; i<tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })
//
// Tenders.findByUserState(1, 'draft').then(function(tenders) {
//   console.log("***** testing findByUserState` method *****");
//   for (i=0; i<tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })

// Tenders.findByKeywords(['pool','math'])
// .then(function(tenders) {
//   console.log("***** testing findByKeyword` method *****");
//   for (i=0; i<tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })

var find_object = {name: 'Pool Table', state: 'published', user_id: 1}
Tenders.findByAny(find_object).then(function(tenders) {
  console.log("***** testing findByAny *****");
  for (var i = 0; i < tenders.rows.length; i++) {
    console.log(tenders.rows[i])
  }
  return
})

// Tenders.findByUser(1).then(function(tenders) {
//   console.log("***** testing findByUser method *****");
//   for (var i = 0; i < tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })

// Tenders.find(3).then(function(tender) {
//   console.log("***** testing find method *****");
//   console.log(tender.rows[0]);
//   return
// })

// Tenders.updateOne({id: 2, name: 'Pool Table', description: 'Slate table includes cues and balls', tender_type: 'goods'}).then(function() {
//   Tenders.find(2).then(function(tender) {
//     console.log(tender.rows[0]);
//     return
//   })
// })

// Tenders.destroy(5).then(function() {
//   Tenders.find(5).then(function(tender) {
//     console.log(tender.rows[0]);
//     return
//   })
// })
// var errors = []

// Tenders.validate({id: 2, name: '', description: '', tender_type: 'goods', user_id: 1}, 'update', function (errors) {
//   console.log("***** validate *****");
//   console.log(errors);
//   return(errors)
// })

// Tenders.publish({id: 3, name: 'tender 3', description: 'tender 3', state: "draft", tender_type: 'goods', user_id: 1}, function(errors) {
//   console.log("*** publish ***");
//   console.log(errors);
//   return errors
// })

// Tenders.bid({id: 3, name: 'tender 3', description: 'tender 3', state: "published", tender_type: 'goods', user_id: 1}, {id:10}, function(errors) {
//   console.log("*** bid ***");
//   console.log(errors);
//   return errors
// })

// Tenders.accept({id: 3, name: 'tender 3', description: 'tender 3', state: "published", tender_type: 'goods', user_id: 1}, {id:10}, function(errors) {
//   console.log("*** accept bid ***");
//   console.log(errors);
//   return errors
// })

// Users.all().then(function(users) {
//   console.log("***** testing all user method *****");
//   for (i=0; i<users.rows.length; i++) {
//     console.log(users.rows[i].last_name);
//   }
//   return
// })

// Users.find(100).then(function(users) {
//   console.log("***** find user by id *****");
//   console.log(users.rows[0]);
// })

// var email = 'tomhendersonfl@comcast.com'
// Users.findByEmail(email).then(function(users) {
//   console.log("***** find user by email *****");
//   console.log(users.rows[0]);
// })

// var errors = Users.validate({id: 1, first_name: '', last_name: '', email_address: 'me@you', facebook_username: ''})
// console.log(errors);

// Bids.find(2).then(function(bids) {
//   console.log("***** testing all bids method *****");
//   for (i=0; i<bids.rows.length; i++) {
//     console.log(bids.rows[i].description);
//   }
//   return
// })
