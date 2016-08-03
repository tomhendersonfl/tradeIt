
exports.up = function(knex, Promise) {
  return knex.schema.createTable('keywords', function(table) {
    table.increments()
    table.integer('tender_id')
    table.string('keyword')
    table.timestamps()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('keywords')
};
