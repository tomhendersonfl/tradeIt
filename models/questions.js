var knex = require('../db/knex')
module.exports = {
  create: function(question) {
    return knex.raw(`insert into questions values (DEFAULT, ${question.tender_id}, ${question.user_id}, '${question.question}', '${question.answer}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
  },
  all: function() {
    return knex.raw(`select q.* from questions q order by q.created_at desc`)
  },
  find: function(id) {
    return knex.raw(`select q.* from questions q where n.id = ${id}`)
  },
  updateOne: function(question) {
    return knex.raw(`update questions set question = '${question.question}', answer = '${question.answer}',  updated_at = CURRENT_TIMESTAMP where id = ${question.id}`)
  },
  destroy: function(id) {
    return knex.raw(`delete from questions where id = ${id}`)
  }
}
