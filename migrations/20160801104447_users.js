
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table)
  {
  table.increments()
  table.string('first_name')
  table.string('last_name')
  table.string('email_address')
  table.string('state')
  table.string('facebook_username')
  table.boolean('is_administrator')
  table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
