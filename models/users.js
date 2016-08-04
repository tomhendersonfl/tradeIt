var knex = require('../db/knex')
module.exports = {
  create: function(user, current_user, callback) {
    knex.raw(`select * from users order by id desc limit 1`)
    .then(function(maxUser) {
      var nextId = Number(maxUser.rows[0].id) + 1
      knex.raw(`insert into users values (${nextId}, '${user.first_name}', '${user.last_name}', '${user.email_address}',  'verified', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '${user.username}', '${user.about_me}', '${user.profile_pic}', '${user.facebook_id}')`)
      .then(function() {
        knex.raw(`select * from users where email_address = '${user.email_address}' order by created_at desc limit 1`)
        .then(function(user) {
          console.log(user.rows[0]);
          return callback(user.rows[0])
        })
      })
    })
  },
  all: function() {
    return knex.raw(`select * from users order by last_name`)
  },
  find: function(id) {
    return knex.raw(`select * from users where id = ${id}`)
  },
  findByEmail: function(email) {
    return knex.raw(`select * from users where email_address = '${email}'`)
  },
  findByFacebookId: function(facebook) {
    return knex.raw(`select * from users where facebook_id = '${facebook}'`)
  },
  updateOne: function(user, current_user, callback) {
    var errors = []
    this.validate(user, 'update', current_user, function(errors) {
      if (errors.length !== 0) {
        return callback(errors)
      } else {
        knex.raw(`update users set first_name = '${user.first_name}', last_name = '${user.last_name}' email_address = '${user.email_address}', updated_at = CURRENT_TIMESTAMP, username = '${user.username}', about_me = '${user.about_me}', profile_pic = '${user.profile_pic}', facebook_id = '${user.facebook_id}' where id = ${user.id}`)
        .then(function() {
          return callback(errors)
        })
      }
    })
  },
  destroy: function(id) {
    return knex.raw(`delete from users where id = ${id}`)
  },
  validate: function(user, userEvent, current_user, callback) {
    var errors = []
    if (user.id !== current_user && !user.is_administrator) {
      errors.push(`Only ${user.first_name} ${user.last_name} or an administrator may update this record`)
    }
    if (user.first_name.trim().length === 0) {
      errors.push("First Name cannot be blank")
    }
    if (user.last_name.trim().length === 0) {
      errors.push("Last Name cannot be blank")
    }
    if (user.email_address.trim().length === 0) {
      errors.push("Email address cannot be blank")
    } else {
      var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      if (!re.test(user.email_address)) {
        errors.push("Email address is not valid")
      }
    }
    return errors
  }
}
