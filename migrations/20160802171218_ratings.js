
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', function(table) {
    table.increments()
    table.integer('rated_user_id')
    table.integer('rating_user_id')
    table.integer('rating_score')
    table.text('rating_comments')
    table.text('rebuttal_comments')
    table.timestamps()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ratings')
};
