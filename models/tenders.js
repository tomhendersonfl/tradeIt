var knex = require('../db/knex')
module.exports = {
  create: function(tender) {
    return knex.raw(`insert into tenders values (DEFAULT, '${tender.name}', 'draft', '${tender.description}', '${tender.type}', ${tender.user_id}, NULL, NULL, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
  },
  table.increments();
  table.string('name');
  table.string('state');
  table.text('description');
  table.string('tender_type');
  table.integer('user_id');
  table.dateTime('published_at');
  table.dateTime('accepted_at');
  table.integer('nbr_views');
  table.timestamps();
  all: function() {
    return knex.raw(`select * from tenders order by name`)
  },
  find: function(id) {
    return knex.raw(`select * from tenders where id = ${id}`)
  },
  updateOne: function(tender) {
    return knex.raw(`update tenders set name = '${tender.name}', description = '${tender.description}', tender_type = '${tender.tender_type}', updated_at = CURRENT_TIMESTAMP`)
  },
  destroy: function(id) {
    return knex.raw(`delete from tenders where id = ${id}`)
  },
  validateCreate: function(tender) {
    var errors = []
    if tender.name.trim().length === 0 {
      errors.push("Name cannot be blank")
    }
    if tender.email_address.trim().length = 0 {
      errors.push("Email address cannot be blank")
    }
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (!re.test(tender.email_address)) {
      errors.push("Email address is not valid")
    }
    return errors
  }
}
