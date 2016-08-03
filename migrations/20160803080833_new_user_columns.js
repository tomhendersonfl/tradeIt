
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table)
  {
  table.string('username')
  table.string('about_me')
  table.string('profile_pic')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
  table.dropColumn('username')
  table.dropColumn('about_me')
  table.dropColumn('profile_pic')
  });
};
