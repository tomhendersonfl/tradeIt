exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex('ratings').insert({id: 1001, rated_user_id: 1007, rating_user_id: 1006, rating_score: 8, rating_comments: 'We just loved the shrunken head we got from Wilma.', rebuttal_comments: '', created_at: '2016-04-01', updated_at: '2016-04-01'}),

        knex('ratings').insert({id: 1002, rated_user_id: 1006, rating_user_id: 1003, rating_score: 3, rating_comments: 'This guy was a real jerk, tried to give me fake dinosaur bones.', rebuttal_comments: 'My friend Barney assured me the bones were real.', created_at: '2016-06-01', updated_at: '2016-06-01'}),

        knex('ratings').insert({id: 1003, rated_user_id: 1007, rating_user_id: 1004, rating_score: 10, rating_comments: 'What a hot mama!!!!!', rebuttal_comments: '', created_at: '2016-06-01', updated_at: '2016-06-01'}),

        knex('ratings').insert({id: 1004, rated_user_id: 1007, rating_user_id: 1005, rating_score: 9, rating_comments: 'Great transaction - love the squawking bird phone', rebuttal_comments: '', created_at: '2016-06-01', updated_at: '2016-06-01'}),

      ]);
    });
};
