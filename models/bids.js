var knex = require('../db/knex')
module.exports = {
  create: function(bid) {
    return knex.raw(`insert into bids values (DEFAULT, ${bid.tender_id}, ${bid.user_id}, 'draft', '${bid.description}', '${bid.response}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
  },
  all: function() {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as userName, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id`)
  },
  find: function(id) {
    return knex.raw(`select b.*, concat(u.first_name,' ',u.last_name) as userName, t.name as tender_name from bids b inner join tenders t on t.id = b.tender_id inner join users u on u.id = t.user_id where b.id = ${id}`)
  },
  updateOne: function(bid) {
    return knex.raw(`update bids set description = '${bid.description}', updated_at = CURRENT_TIMESTAMP where id = ${bid.id}`)
  },
  destroy: function(id) {
    return knex.raw(`delete from bids where id = ${id}`)
  }
}
