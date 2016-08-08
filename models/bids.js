var knex = require('../db/knex')
var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({service: 'Gmail', auth: {user: '1earldog@gmail.com', pass: 'Homeontherange1'} })
var emailFrom = '"The tradeIt Team" <1earldog@gmail.com>'
module.exports = {
  create: function(bid, callback) {
    knex.raw(`insert into bids values (DEFAULT, ${bid.tender_id}, ${bid.user_id}, 'active', '${bid.bid_description}', 'Pending ...', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
    .then(function() {
      knex.raw(`select * from bids where user_id = ${bid.user_id} and tender_id = ${bid.tender_id} and state = 'active' and description = '${bid.bid_description}' order by created_at desc limit 1`)
      .then(function(bid) {
        knex.raw(`update tenders set state = 'active', updated_at = CURRENT_TIMESTAMP where id = ${bid.rows[0].tender_id}`)
        .then(function() {
          knex.raw(`select * from tenders where id = ${bid.rows[0].tender_id}`)
          .then(function(tender) {
            knex.raw(`select u.id, u.first_name, u.email_address from users u where u.id = ${tender.rows[0].user_id}`)
            .then(function(emails) {
              var mailOptions = {
                from: emailFrom,
                to: emails.rows[0].email_address,
                subject: 'You have received a tradeIt bid',
                text: `Hi ${emails.rows[0].first_name}.  We are writing to inform you that a bid has been placed on your ${tender.rows[0].name}.`
              }
              transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                  console.log("***** errors *****");
                  console.log(error);
                } else {
                  console.log("***** email sent *****");
                  console.log(info.response);
                }
              })
              return callback(bid.rows[0])
            })
          })
        })
      })
    })
  },
  accept: function(bid_id, callback) {
    knex.raw(`update bids set state = 'accepted', updated_at = CURRENT_TIMESTAMP where id = ${bid_id}`)
    .then(function() {
      knex.raw(`select * from bids where id = ${bid_id}`)
      .then(function(bid) {
        knex.raw(`update tenders set state = 'closed', accepted_at = CURRENT_TIMESTAMP where id = ${bid.rows[0].tender_id}`)
        .then(function() {
          knex.raw(`select * from tenders where id = ${bid.rows[0].tender_id}`)
          .then(function(tender) {
            knex.raw(`select u.id, u.first_name, u.email_address from users u where u.id = ${bid.rows[0].user_id}`)
            .then(function(emails) {
              var mailOptions = {
                from: emailFrom,
                to: emails.rows[0].email_address,
                subject: 'Your bid has been accepted',
                text: `Hi ${emails.rows[0].first_name}.  We are writing to inform you that your bid for ${tender.rows[0].name} has been accepted.`
              }
              transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                  console.log("***** errors *****");
                  console.log(error);
                } else {
                  console.log("***** email sent *****");
                  console.log(info.response);
                }
              })
              return callback(bid.rows[0])
            })
          })
        })
      })
    })
  },
  reject: function(bid_id, callback) {
    knex.raw(`update bids set state = 'rejected', updated_at = CURRENT_TIMESTAMP where id = ${bid_id}`)
    .then(function() {
      knex.raw(`select * from bids where id = ${bid_id}`)
      .then(function(bid) {
        knex.raw(`update tenders set state = 'published', updated_at = CURRENT_TIMESTAMP where id = ${bid.rows[0].tender_id}`)
        .then(function() {
          console.log(bid.rows[0]);
          return callback(bid.rows[0])
        })
      })
    })
  },
  all: function() {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as username, t.name as tender_name, t.picture from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id`)
  },
  find: function(id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as username, t.name as tender_name, t.picture from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.id = ${id}`)
  },
  findByTender: function(tender_id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as username, t.name as tender_name, t.picture from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.tender_id = ${tender_id}`)
  },
  findByUser: function(user_id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as username, t.name as tender_name, t.picture from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.user_id = ${user_id}`)
  },
  updateOne: function(bid) {
    return knex.raw(`update bids set description = '${bid.description}', updated_at = CURRENT_TIMESTAMP where id = ${bid.id}`)
  },
  destroy: function(id) {
    return knex.raw(`delete from bids where id = ${id}`)
  },
  validate: function(bid, bidEvent, callback) {
    var errors = []
    return callback(errors)
  }
}
