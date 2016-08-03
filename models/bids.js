var knex = require('../db/knex')
module.exports = {
  create: function(bid) {
    return knex.raw(`insert into bids values (DEFAULT, ${bid.tender_id}, ${bid.user_id}, 'draft', '${bid.description}', '${bid.response}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
    .then(function() {
      knex.raw(`select * from bids where user_id = ${bid.user_id} and tender_id = ${bid.tender_id} and state = 'draft' and description = '${bid.description}' order by created_at desc limit 1`)
      .then(function(bid) {
        console.log(bid.rows[0]);
        return bid.rows[0]
      })
    })
  },
  all: function() {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as userName, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id`)
  },
  find: function(id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as userName, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.id = ${id}`)
  },
  findByTender: function(tender_id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as userName, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.tender_id = ${tender_id}`)
  },
  findByUser: function(user_id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as userName, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.user_id = ${user_id}`)
  },
  updateOne: function(bid) {
    return knex.raw(`update bids set description = '${bid.description}', updated_at = CURRENT_TIMESTAMP where id = ${bid.id}`)
  },
  destroy: function(id) {
    return knex.raw(`delete from bids where id = ${id}`)
  }
}
