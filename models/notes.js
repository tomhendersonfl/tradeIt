var knex = require('../db/knex')
module.exports = {
  create: function(note) {
    return knex.raw(`insert into notes values (DEFAULT, ${note.tender_id}, '${note.note_text}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
  },
  all: function() {
    return knex.raw(`select n.* from notes n order by created_at desc`)
  },
  find: function(id) {
    return knex.raw(`select n.* from notes n where n.id = ${id}`)
  },
  updateOne: function(note) {
    return knex.raw(`update notes set note_text = '${note.note_text}', updated_at = CURRENT_TIMESTAMP where id = ${note.id}`)
  },
  destroy: function(id) {
    return knex.raw(`delete from notes where id = ${id}`)
  }
}
