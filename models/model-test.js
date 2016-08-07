// This file contains tests for all models
//   To use it, uncomment the method you want to test
//     and use node to execute this file
var knex = require('../db/knex')
var Tenders = require('../models/tenders')
var Users = require('../models/users')
var Bids = require('../models/bids')
var Notes = require('../models/notes')
var Ratings = require('../models/ratings')
var Keywords = require('../models/keywords')
var Questions = require('../models/questions')

// Tenders.create
// var names = [{name: 'Old Smelly Sneakers', desc: 'These are some great old sneakers with a wonderful aroma'}, {name: '60 inch Samsung HDTV', desc: 'This old TV still works great'}, {name: 'Asian Prints', desc: '4 Japanese woodblock prints by Hiroshige'}, {name: 'Living Room Set', desc: '4 piece set of living room furniture by Broyhill'}]
// var index = Math.floor(Math.random() * (names.length))
// var current_user = 1
// Tenders.create({name: names[index].name, description: names[index].desc, tender_type: 'goods', user_id: 1, picture: '../images/mypic.png'}, current_user, function(tender) {
//   console.log("***** create tender *****");
//   console.log(tender);
// })

// Tenders.all
// Tenders.all().then(function(tenders) {
//   console.log("***** testing all method *****");
//   for (i=0; i<tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })
//
// // Tenders.find
// var tender_id = 3
// Tenders.find(tender_id).then(function(tender) {
//   console.log("***** testing find method *****");
//   console.log(tender.rows[0]);
//   return
// })
//
// // Tenders.findByUser
// var user_id = 1
// Tenders.findByUser(user_id).then(function(tenders) {
//   console.log("***** testing findByUser method *****");
//   for (var i = 0; i < tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })
//
// // Tenders.findByUserState
// var user_id = 1
// var state = 'draft'
// Tenders.findByUserState(user_id, state).then(function(tenders) {
//   console.log("***** testing findByUserState method *****");
//   for (i=0; i<tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })
//
// // Tenders.findByKeyword
// var keyword = 'pool'
// Tenders.findByKeyword(keyword)
// .then(function(tenders) {
//   console.log("***** testing findByKeyword method *****");
//   for (i=0; i<tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })
//
// Tenders.findByKeywords
// var keywords = ['pool','math']
// Tenders.findByKeywords(keywords)
// .then(function(tenders) {
//   console.log("***** testing findByKeywords method *****");
//   for (i=0; i<tenders.rows.length; i++) {
//     console.log(tenders.rows[i].name);
//   }
//   return
// })
//
// // Tenders.findByAny
// var find_object = {state: 'published'}
// Tenders.findByAny(find_object).then(function(tenders) {
//   console.log("***** testing findByAny *****");
//   for (var i = 0; i < tenders.rows.length; i++) {
//     console.log(tenders.rows[i])
//   }
//   return
// })
//
// display table schema
// knex('users').columnInfo().then(function(info) {
//   console.log(info);
// });

// Tenders.updateOne
// var current_user = 1
// var tender = {id: 2, name: 'Pool Table and Cues', description: 'Slate table includes cues and balls', state: 'published', tender_type: 'goods', nbr_views: 26, picture: '../img/mypic.png'}
// Tenders.updateOne(tender, current_user, function(errors) {
//   console.log("*** update ***");
//   console.log(errors);
//   return errors
// })

// Tenders.destroy
// var current_user = 1001
// Tenders.create({name: 'delete test', description: 'delete test', tender_type: 'goods', user_id: 1001}, current_user, function(tender) {
//   console.log("***** tender added *****");
//   console.log(tender);
// })
// var tenderId = 21
// var current_user = 1001
// Tenders.destroy(tenderId, current_user, function(errors) {
//   console.log("***** delete *****");
//   console.log(errors);
//   return errors
// })

// Tenders.validate
// var current_user = 2
// Tenders.validate({id: 2, name: '', description: '', tender_type: 'goods', user_id: 1}, 'update', current_user, function (errors) {
//   console.log("***** validate *****");
//   console.log(errors);
//   return(errors)
// })

// Tenders.publish
// var current_user = 1
// Tenders.publish({id: 2, name: 'tender 3', description: 'tender 3', state: "published", tender_type: 'goods', user_id: 1}, current_user, function(errors) {
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

// Users.create
// var user = {first_name: 'Wilma', last_name: 'Flintstone', email_address: 'wilma@bedrock.gov', username: 'YabbaDabbaDo', about_me: 'I love beer', profile_pic: '', facebook_id: '123456789' }
// var current_user = 1
// Users.create(user, current_user, function(user) {
//     console.log("***** user added *****");
//     console.log(user);
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

// Users.updateOne
// var current_user = 1
// var user = {id: 1, first_name: 'Thomas', last_name: 'Henderson', email_address: 'tomhendersonfl@gmail.com', username: 'tomhendersonfl', about_me: 'hello', profile_pic: ' '}
// Users.updateOne(user, current_user, function(errors) {
//   console.log("*** update user ***");
//   console.log(errors);
//   return errors
// })

// var errors = Users.validate({id: 1, first_name: '', last_name: '', email_address: 'me@you', facebook_username: ''})
// console.log(errors);

// Bids.create
// var bid = {tender_id: 1003, bid_user_id: 1004, bid_description: 'I will give you a stuffed rhino for the unicorn meat'}
// Bids.create(bid, function(bid) {
//   console.log("***** create bid *****");
//   console.log(bid);
// })

// Bids.accept
// var bid_id = 19
// Bids.accept(bid_id, function(bid) {
//   console.log("***** testing accept bid *****");
//   console.log(bid);
// })

// Bids.all
// Bids.all().then(function(bids) {
//   console.log("***** testing all bids *****");
//   for (i=0; i<bids.rows.length; i++) {
//     console.log(bids.rows[i].description);
//   }
//   return
// })

// Bids.find
// var id = 2
// Bids.find(id).then(function(bids) {
//   console.log("***** testing find bid *****");
//   for (i=0; i<bids.rows.length; i++) {
//     console.log(bids.rows[i].description);
//   }
//   return
// })

// Ratings.all
// Ratings.all().then(function(ratings) {
//   console.log("***** testing all ratings *****");
//   for (i=0; i<ratings.rows.length; i++) {
//     console.log(ratings.rows[i]);
//   }
//   return
// })
//
// // Ratings.find
// var id = 1002
// Ratings.find(id).then(function(ratings) {
//   console.log("***** testing find rating *****");
//   for (i=0; i<ratings.rows.length; i++) {
//     console.log(ratings.rows[i]);
//   }
//   return
// })
