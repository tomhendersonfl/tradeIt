
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tenders', function(table)
  {
  table.increments();
  table.string('name' );
  table.string('state');
  table.text('description');
  table.string('tender_type');
  table.integer('user_id');
  table.dateTime('published_at');
  table.dateTime('accepted_at');
  table.integer('nbr_views');
  table.timestamps();
  })
}

exports.down = function(knex, Promise) {
 	 	return knex.schema.dropTableIfExists('tenders');
};
