
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', function(table) {
    table.increments()
    table.integer('tender_id')
    table.integer('user_id')
    table.text('question')
    table.text('answer')
    table.timestamps()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions')
};
