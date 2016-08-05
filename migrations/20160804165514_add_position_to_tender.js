
exports.up = function(knex, Promise) {
  return knex.schema.table('tenders', function(table)
  {
  table.string('position')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('tenders', function(table) {
  table.dropColumn('position')
  });
};
