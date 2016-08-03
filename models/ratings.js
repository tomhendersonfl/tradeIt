var knex = require('../db/knex')
module.exports = {
  create: function(rating) {
    return knex.raw(`insert into ratings values (DEFAULT, ${rating.rated_user_id}, ${rating.rating_user_id}, ${rating.rating_score}, '${rating.rating_comments}', '${rating.rebuttal_comments}' CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
    .then(function() {
      knex.raw(`select * from ratings where rated_user_id = ${rating.rated_user_id} and rating_user_id = ${rating.rating_user_id} and rating_score = ${rating.rating_score} order by created_at desc limit 1`)
      .then(function(rating) {
        console.log(rating.rows[0]);
        return rating.rows[0]
      })
    })
  },
  all: function() {
    return knex.raw(`select r.* from ratings r order by r.updated_at desc`)
  },
  find: function(id) {
    return knex.raw(`select r.* from ratings r where r.id = ${id}`)
  },
  findByUser: function(user_id) {
    return knex.raw(`select r.* from ratings r where r.user_id = ${user_id} order by created_at desc`)
  },
  updateOne: function(rating) {
    return knex.raw(`update ratings set rating_score = ${rating.rating_score}, rating_comments = '${rating.rating_comments}', rebuttal_comments = '${rating.rebuttal_comments}', updated_at = CURRENT_TIMESTAMP where id = ${rating.id}`)
  },
  destroy: function(id) {
    return knex.raw(`delete from ratings where id = ${id}`)
  },
  validate: function(rating, ratingEvent, current_user, callback) {
    var errors = []
    knex.raw(`select * from users where id=${current_user}`)
    .then(function(user) {
      switch (ratingEvent) {
        case "create":
          if (rating.rated_user_id === current_user) {
            errors.push("Users may not rate themselves")
          }
          break
        case "update":
          if (rating.rating_user_id !== current_user && !user.rows[0].is_administrator) {
            errors.push("Only the rating owner may update a rating")
          }
          break
        case "rebuttal":
          if (rating.rated_user_id) !== current_user  && !user.rows[0].is_administrator) {
            errors.push("Only the rated user may enter rebuttal comments")
          }
          if (rating.rebuttal_comments.trim().length === 0) {
            errors.push("Rebuttal comments cannot be blank")
          }
          break
      }
      if (rating.rating_score < 0 || rating.rating_score > 10) {
        errors.push("Rating score must be 1 - 10")
      }
      if (rating.rating_comments.trim().length === 0) {
        errors.push("Rating comments cannot be blank")
      }
      return callback(errors)
    })
  }
}
