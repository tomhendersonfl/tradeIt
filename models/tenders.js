var knex = require('../db/knex')
module.exports = {
  create: function(tender) {
    knex.raw(`insert into tenders values (DEFAULT, '${tender.name}', 'draft', '${tender.description}', '${tender.tender_type}', ${tender.user_id}, NULL, NULL, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
    .then(function() {
      knex.raw(`select * from tenders where user_id = ${tender.user_id} and name = '${tender.name}' order by created_at desc limit 1`)
      .then(function(tender) {
        console.log(tender.rows[0]);
        return tender.rows[0]
      })
    })
  },
  all: function() {
    return knex.raw(`select t.*, concat(u.first_name,' ',u.last_name) as userName from tenders t inner join users u on t.user_id = u.id order by t.created_at desc`)
  },
  find: function(id) {
    return knex.raw(`select t.*, u.first_name, u.last_name, u.email_address, u.facebook_id, u.is_administrator from tenders t inner join users u on t.user_id = u.id where t.id = ${id}`)
  },
  findByUser: function(user) {
    return knex.raw(`select t.* from tenders t where t.user_id = ${user} order by t.created_at desc`)
  },
  findByUserState: function(user,state) {
    return knex.raw(`select t.* from tenders t where t.user_id = ${user} and t.state = '${state}' order by t.created_at desc`)
  },
  findByKeyword: function(keyword) {
    return knex.raw(`select k.keyword, t.* from keywords k inner join tenders t on k.tender_id = t.id where k.keyword = '${keyword}' and t.state = 'published' order by t.created_at desc`)
  },
  findByKeywords: function(keywords) {
    var query = `select k.keyword, t.* from keywords k inner join tenders t on k.tender_id = t.id where t.state = 'published' and k.keyword in (`
    for (var i = 0; i < keywords.length; i++) {
      i === 0 ? query += `'${keywords[i]}'` : query += `,'${keywords[i]}'`
    }
    query += `) order by t.created_at desc`
    return knex.raw(query)
  },
  findByAny: function(find_object) {
    var query = `select t.* from tenders t where `
    var first_key = true
    for (var key in find_object) {
      if (first_key) {
        if (typeof find_object[key] === 'string') {
          query += `${key} = '${find_object[key]}' `
        } else {
          query += `${key} = ${find_object[key]} `
        }
        first_key = false
      } else {
        if (typeof find_object[key] === 'string') {
          query += `and ${key} = '${find_object[key]}' `
        } else {
          query += `and ${key} = ${find_object[key]} `
        }
      }
    }
    return knex.raw(query)
  },
  updateOne: function(tender) {
    return knex.raw(`update tenders set name = '${tender.name}', description = '${tender.description}', tender_type = '${tender.tender_type}', state = 'draft', nbr_views = ${tender.nbr_views}, updated_at = CURRENT_TIMESTAMP where id = ${tender.id}`)
  },
  destroy: function(id) {
    return knex.raw(`delete from tenders where id = ${id}`)
  },
  validate: function(tender, tenderEvent, current_user, callback) {
    var errors = []
    knex.raw(`select * from users where id = ${current_user}`)
    .then(function(user) {
      if (tender.user_id !== current_user && !user.rows[0].is_administrator) {
        console.log("*** tender ***  " +  tender.user_id);
        console.log("*** user ***  " + user.rows[0].id);
        errors.push(`Only tender owner may ${tenderEvent} a tender`)
      }
      if (user.rows[0].state === 'unverified') {
        errors.push(`Only a verified user may ${tenderEvent} a tender`)
      }
      if (tender.description.trim().length === 0) {
        errors.push("Description cannot be blank")
      }
      return callback(errors)
    })
  },
  publish: function(tender, callback) {
    var errors = []
    this.validate(tender, 'publish', function(errors) {
      if (tender.state !== 'draft') {
        errors.push("Only tenders in draft state may be published")
      }
      if (errors.length !== 0) {
        return callback(errors)
      } else {
        knex.raw(`update tenders set published_at = CURRENT_TIMESTAMP, state = 'published' where id = ${tender.id}`)
        .then(function() {
          return callback(errors)
        })
      }
    })
  },
  bid: function(tender, bid, callback) {
    var errors = []
    this.validate(tender, 'bid', function(errors) {
      if (tender.state !== 'published') {
        errors.push("Bids can only be made on published tenders")
      }
      if (errors.length !== 0) {
        return callback(errors)
      } else {
        knex.raw(`update tenders set state = 'active', updated_at = CURRENT_TIMESTAMP where id = ${tender.id}`)
        .then(function() {
          return callback(errors)
        })
      }
    })
  },
  accept: function(tender, bid, callback) {
    var errors = []
    this.validate(tender, 'accept', function(errors) {
      if (tender.state !== 'active') {
        errors.push("Bids can only be accepted on active tenders")
      }
      if (errors.length !== 0) {
        return callback(errors)
      } else {
        knex.raw(`update tenders set accepted_at = CURRENT_TIMESTAMP, state = 'closed' where id = ${tender.id}`)
        .then(function() {
          return callback(errors)
        })
      }
    })
  },
  reject: function(tender, bid, callback) {
    var errors = []
    this.validate(tender, 'reject', function(errors) {
      if (tender.state !== 'active') {
        errors.push("Bids can only be rejected on active tenders")
      }
      if (errors.length !== 0) {
        return callback(errors)
      } else {
        knex.raw(`update tenders set updated_at = CURRENT_TIMESTAMP, state = 'published' where id = ${tender.id}`)
        .then(function() {
          return callback(errors)
        })
      }
    })
  }
}
