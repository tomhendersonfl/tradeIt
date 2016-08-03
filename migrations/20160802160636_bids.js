
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bids', function(table) {
    table.increments()
    table.integer('tender_id')
    table.integer('user_id')
    table.string('state')
    table.text('description')
    table.text('response')
    table.timestamps()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bids')
};
