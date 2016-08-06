var knex = require('../db/knex')
module.exports = {
  create: function(rating, callback) {
    knex.raw(`insert into ratings values (DEFAULT, ${rating.rated_user_id}, ${rating.rating_user_id}, ${rating.rating_score}, '${rating.rating_comments}', ' ' CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
    .then(function() {
      knex.raw(`select * from ratings where rated_user_id = ${rating.rated_user_id} and rating_user_id = ${rating.rating_user_id} and rating_score = ${rating.rating_score} order by created_at desc limit 1`)
      .then(function(rating) {
        console.log(rating.rows[0]);
        return callback(rating.rows[0])
      })
    })
  },
  all: function() {
    return knex.raw(`select r.*, concat(rating_user.first_name,' ',rating_user.last_name) as rating_user_name, concat(rated_user.first_name,' ',rated_user.last_name) as rated_user_name from ratings r left join users rating_user on r.rating_user_id = rating_user.id inner join users rated_user on r.rated_user_id = rated_user.id order by r.updated_at desc`)
  },

  find: function(id) {
    return knex.raw(`select r.*, concat(rating_user.first_name,' ',rating_user.last_name) as rating_user_name, concat(rated_user.first_name,' ',rated_user.last_name) as rated_user_name from ratings r left join users rating_user on r.rating_user_id = rating_user.id inner join users rated_user on r.rated_user_id = rated_user.id where r.id = ${id}`)
  },
  findByUser: function(user_id) {
    return knex.raw(`select r.*, concat(rating_user.first_name,' ',rating_user.last_name) as rating_user_name, concat(rated_user.first_name,' ',rated_user.last_name) as rated_user_name from ratings r left join users rating_user on r.rating_user_id = rating_user.id inner join users rated_user on r.rated_user_id = rated_user.id where r.rated_user_id = ${user_id} order by created_at desc`)
  },
  updateOne: function(rating, callback) {
    knex.raw(`update ratings set rating_score = ${rating.rating_score}, rating_comments = '${rating.rating_comments}', rebuttal_comments = '${rating.rebuttal_comments}', updated_at = CURRENT_TIMESTAMP where id = ${rating.id}`)
    .then(function() {
      return callback()
    })
  },
  destroy: function(id, callback) {
    knex.raw(`delete from ratings where id = ${id}`)
    .then(function() {
      return callback()
    })
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
          if (rating.rated_user_id !== current_user  && !user.rows[0].is_administrator) {
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
