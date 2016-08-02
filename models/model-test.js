var knex = require('../db/knex')
var Tenders = require('../models/tenders')
var Users = require('../models/users')
var Bids = require('../models/bids')

// Tenders.create({name: 'Coffee Maker', description: 'Keurig model B60 in excellent condition', tender_type: 'goods', user_id: 2}).then(function() {
//   knex.raw(`select * from tenders order by created_at desc limit 1`).then(function(tenders) {
//     console.log("***** testing create method *****");
//     console.log(tenders.rows[0]);
//     return
//   })
// })
//
// Tenders.all().then(function(tenders) {
//   console.log("***** testing all method *****");
//   for (i=0; i<tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })

// Tenders.allUser(1).then(function(tenders) {
//   console.log("***** testing allUser method *****");
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
