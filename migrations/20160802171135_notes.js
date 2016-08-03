
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table) {
    table.increments()
    table.integer('tender_id')
    table.text('note_text')
    table.timestamps()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes')
};
