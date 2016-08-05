exports.seed = function(knex, Promise) {
  return knex('tenders').del()
    .then(function () {
      return Promise.all([
        knex('tenders').insert({id: 1001, name: 'grilled cheese sandwich', state: 'published', description: 'bears a portrait of the Virgin Mary embedded in the toast, estimated value 20,000', tender_type: 'goods', user_id: 1001, published_at: null, accepted_at: null, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1002, name: 'Advertising on forehead', state: 'draft', description: 'Tatoo your ad on my forehead', tender_type: 'services', user_id: 1001, published_at: null, accepted_at: null, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1003, name: 'Corn flake shaped like Illinois', state: 'published', description: 'this corn flake looks just like the state of Illinois', tender_type: 'goods', user_id: 1001, published_at: null, accepted_at: null, nbr_views: 2, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1004, name: 'Bigfoot mummy', state: 'published', description: 'A genuine mummified Bigfoot from Canada', tender_type: 'goods', user_id: 1001, published_at: null, accepted_at: null, nbr_views: 30, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1005, name: 'the Internet', state: 'published', description: 'I will trade the entire Internet for a new toaster oven', tender_type: 'goods', user_id: 1006, published_at: null, accepted_at: null, nbr_views: 101, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1006, name: 'Civil War dirt', state: 'published', description: 'Actual dirt from the battle of Gettysburg', tender_type: 'goods', user_id: 1006, published_at: null, accepted_at: null, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1007, name: 'The meaning of Life', state: 'published', description: 'I have discovered the meaning of life and will share it with the highest bidder', tender_type: 'services', user_id: 1007, published_at: null, accepted_at: null, nbr_views: 6, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1008, name: 'Mr. Clucker Chicken Willy Warmer', state: 'published', description: 'This is a new handmade crochet willy warmer.', tender_type: 'goods', user_id: 1002, published_at: null, accepted_at: null, nbr_views: 692, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1009, name: 'The planet Kolob', state: 'published', description: 'Here is a chance to own the home planet of Mormonism.', tender_type: 'goods', user_id: 1003, published_at: null, accepted_at: null, nbr_views: 0, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1010, name: 'Haunted antique baby doll', state: 'published', description: 'Has the spirit of a 7 year old middle child with autism by the name of Candy', tender_type: 'goods', user_id: 1004, published_at: null, accepted_at: null, nbr_views: 4, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1011, name: 'Canned Unicorn meat', state: 'active', description: 'Take home these 14-ounces of delicious unicorn meat', tender_type: 'services', user_id: 1001, published_at: null, accepted_at: null, nbr_views: 20, created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('tenders').insert({id: 1012, name: "William Shatner's Kidney Stone", state: 'closed', description: 'Actual kidney stone from his 2006 operation; last sold for $25,000.', tender_type: 'goods', user_id: 1001, published_at: null, accepted_at: null, nbr_views: 2, created_at: '2016-04-01', updated_at: '2016-04-02'})

      ]);
    });
};
