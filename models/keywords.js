var knex = require('../db/knex')
module.exports = {
  create: function(keyword) {
    return knex.raw(`insert into keywords values (DEFAULT, ${keyword.tender_id}, '${keyword.keyword}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
  },
  all: function() {
    return knex.raw(`select k.* from keywords k order by k.keyword`)
  },
  find: function(id) {
    return knex.raw(`select k.* from keywords k where k.id = ${id}`)
  },
  updateOne: function(keyword) {
    return knex.raw(`update keywords set keyword = '${keyword.keyword}', updated_at = CURRENT_TIMESTAMP where id = ${keyword.id}`)
  },
  destroy: function(id) {
    return knex.raw(`delete from keywords where id = ${id}`)
  }
}
