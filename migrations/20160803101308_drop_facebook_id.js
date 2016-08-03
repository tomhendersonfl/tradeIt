
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table)
  {
  table.dropColumn('facebook_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
  table.integer('facebook_id')
  });
};
