var knex = require('../db/knex')
module.exports = {
  create: function(user) {
    return knex.raw(`insert into users values (DEFAULT, '${user.first_name}', '${user.last_name}', '${user.email_address}',  'draft', '${user.facebook_username}', '${user.is_administrator}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
  },
  all: function() {
    return knex.raw(`select * from users order by last_name`)
  },
  find: function(id) {
    return knex.raw(`select * from users where id = ${id}`)
  },
  updateOne: function(user) {
    return knex.raw(`update users set first_name = '${user.first_name}', last_name = '${user.last_name}' email_address = '${user.email_address}', facebook_username = '${user.facebook_username}', updated_at = CURRENT_TIMESTAMP`)
  },
  destroy: function(id) {
    return knex.raw(`delete from users where id = ${id}`)
  },
  validate: function(user) {
    var errors = []
    if (user.first_name.trim().length === 0) {
      errors.push("First Name cannot be blank")
    }
    if (user.last_name.trim().length === 0) {
      errors.push("Last Name cannot be blank")
    }
    if (user.email_address.trim().length === 0) {
      errors.push("Email address cannot be blank")
    }
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (!re.test(user.email_address)) {
      errors.push("Email address is not valid")
    }
    return errors
  }
}
