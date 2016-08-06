var knex = require('../db/knex')
module.exports = {
  create: function(bid, callback) {
    knex.raw(`insert into bids values (DEFAULT, ${bid.tender_id}, ${bid.user_id}, 'active', '${bid.bid_description}', 'Pending ...', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
    .then(function() {
      knex.raw(`select * from bids where user_id = ${bid.user_id} and tender_id = ${bid.tender_id} and state = 'active' and description = '${bid.bid_description}' order by created_at desc limit 1`)
      .then(function(bid) {
        knex.raw(`update tenders set state = 'active', updated_at = CURRENT_TIMESTAMP where id = ${bid.rows[0].tender_id}`)
        .then(function() {
          console.log(bid.rows[0]);
          return callback(bid.rows[0])
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
          console.log(bid.rows[0]);
          return callback(bid.rows[0])
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
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as username, t.picture, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id`)
  },
  find: function(id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as username, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.id = ${id}`)
  },
  findByTender: function(tender_id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as username, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.tender_id = ${tender_id}`)
  },
  findByUser: function(user_id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as username, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.user_id = ${user_id}`)
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
