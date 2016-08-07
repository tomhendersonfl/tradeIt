exports.seed = function(knex, Promise) {
  return knex('bids').del()
    .then(function () {
      return Promise.all([
        knex('bids').insert({id: 1001, tender_id: 1011, rated_user_id: 1007, bid_user_id: 1006, bid_score: 8, bid_comments: 'We just loved the shrunken head we got from Wilma.', rebuttal_comments: '', created_at: '2016-04-01', updated_at: '2016-04-01'}),

        knex('bids').insert({id: 1002, rated_user_id: 1006, bid_user_id: 1003, bid_score: 3, bid_comments: 'This guy was a real jerk, tried to give me fake dinosaur bones.', rebuttal_comments: 'My friend Barney assured me the bones were real.', created_at: '2016-06-01', updated_at: '2016-06-01'}),

        knex('bids').insert({id: 1003, rated_user_id: 1007, bid_user_id: 1004, bid_score: 10, bid_comments: 'What a hot mama!!!!!', rebuttal_comments: '', created_at: '2016-06-01', updated_at: '2016-06-01'}),

        knex('bids').insert({id: 1004, rated_user_id: 1007, bid_user_id: 1005, bid_score: 9, bid_comments: 'Great transaction - love the squawking bird phone', rebuttal_comments: '', created_at: '2016-06-01', updated_at: '2016-06-01'}),

      ]);
    });
};
