var knex = require('../db/knex')
module.exports = {
  create: function(tender) {
    return knex.raw(`insert into tenders values (DEFAULT, '${tender.name}', 'draft', '${tender.description}', '${tender.type}', ${tender.user_id}, NULL, NULL, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
  },
  all: function() {
    return knex.raw(`select t.*, concat(u.first_name,' ',u.last_name) as userName from tenders t inner join users u on t.user_id = u.id order by created_at desc`)
  },
  allUser: function(user) {
    return knex.raw(`select * from tenders where user_id = ${user} order by created_at desc`)
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
  validate: function(tender) {
    knex.raw(`select * from users where id = ${tender.user_id}`)
    .then(function(user) {
      var errors = []
      if (tender.name.trim().length === 0) {
        errors.push("Name cannot be blank")
      }
      if (tender.description.trim().length === 0) {
        errors.push("Description cannot be blank")
      }
      return errors
    })
  },
  publish: function(tender) {
    knex.raw(`select * from users where id = ${tender.user_id}`)
    .then(function(user) {
      var errors = []
      if (tender.state !== 'draft') {
        errors.push("Only tenders in draft state may be published")
      }
      if (tender.user_id !== user.id || !user.is_administrator) {
        errors.push("Only tender owner may publish a tender")
      }
      if (user.state === 'unverified') {
        errors.push("Only a verified user may publish a tender")
      }
      if (errors.length !== 0) {
        return errors
      }
      knex.raw(`update tenders set published_at = CURRENT_TIMESTAMP, state = 'published' where id = ${tender.id}`)
      return errors
    })
  },
  validateBid: function(tender) {
    var errors = []
    if (tender.state !== 'published') {
      errors.push("Bids can only be made on published tenders")
    }
    return errors
  },
  validateAccept: function(tender, bid) {
    var errors = []
    if (tender.state !== 'active') {
      errors.push("Bids can only be accepted on active tenders")
    }
    return errors
  },
  validateReject: function(tender, bid) {
    var errors = []
    if (tender.state !== 'active') {
      errors.push("Bids can only be rejected on active tenders")
    }
  },
  validateCreate: function(tender) {
    var errors = []
    if (tender.name.trim().length === 0) {
      errors.push("Name cannot be blank")
    }
    if (tender.email_address.trim().length = 0) {
      errors.push("Email address cannot be blank")
    }
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (!re.test(tender.email_address)) {
      errors.push("Email address is not valid")
    }
    return errors
  }
}
