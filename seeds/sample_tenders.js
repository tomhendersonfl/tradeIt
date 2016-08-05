exports.seed = function(knex, Promise) {
  return knex('tenders').del()
    .then(function () {
      return Promise.all([
        knex('tenders').insert({id: 1001, name: 'grilled cheese sandwich', state: 'draft', description: 'bears a portrait of the Virgin Mary embedded in the toast; estimated value $20,000.', tender_type: 'goods', user_id: 1, published_at: NULL, accepted_at: NULL, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1001, name: 'add space on forehead', state: 'draft', description: 'tatoo your ad on my forehead', tender_type: 'services', user_id: 1, published_at: NULL, accepted_at: NULL, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'})

        knex('tenders').insert({id: 1001, name: 'corn flake shaped like Illinois', state: 'draft', description: 'this corn flake looks just like the state of Illinois', tender_type: 'goods', user_id: 1, published_at: NULL, accepted_at: NULL, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'})

        knex('tenders').insert({id: 1001, name: 'the meaning of life', state: 'draft', description: 'I have discovered the meaning of life and will share it with the highest bidder', tender_type: 'services', user_id: 1, published_at: NULL, accepted_at: NULL, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'})

        knex('tenders').insert({id: 1001, name: 'the Internet', state: 'draft', description: 'I will trade the entire Internet for a new toaster oven', tender_type: 'goods', user_id: 1, published_at: NULL, accepted_at: NULL, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'})

        knex('tenders').insert({id: 1001, name: 'Civil War dirt', state: 'draft', description: 'Actual dirt from the battle of Gettysburg', tender_type: 'goods', user_id: 1, published_at: NULL, accepted_at: NULL, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'})

        knex('tenders').insert({id: 1001, name: 'own your own Planet', state: 'draft', description: 'I have discovered the meaning of life and will share it with the highest bidder', tender_type: 'services', user_id: 1, published_at: NULL, accepted_at: NULL, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'})

        knex('tenders').insert({id: 1001, name: 'the meaning of life', state: 'draft', description: 'I have discovered the meaning of life and will share it with the highest bidder', tender_type: 'services', user_id: 1, published_at: NULL, accepted_at: NULL, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'})

      ]);
    });
};
