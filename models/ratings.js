var knex = require('../db/knex')
module.exports = {
  create: function(rating) {
    return knex.raw(`insert into ratings values (DEFAULT, ${rating.rated_user_id}, ${rating.rating_user_id}, ${rating.rating_score}, '${rating.rating_comments}', '${rating.rebuttal_comments}' CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
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
  }
}
