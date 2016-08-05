exports.seed = function(knex, Promise) {
  return knex('keywords').del()
    .then(function () {
      return Promise.all([
        knex('keywords').insert({id: 1001, tender_id: 1001, keyword: 'cheese', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1002, tender_id: 1003, keyword: 'illinois', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1003, tender_id: 1004, keyword: 'mummy', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1004, tender_id: 1005, keyword: 'internet', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1005, tender_id: 1006, keyword: 'dirt', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1006, tender_id: 1007, keyword: 'life', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1007, tender_id: 1008, keyword: 'willy', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1008, tender_id: 1009, keyword: 'planet', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1009, tender_id: 1010, keyword: 'doll', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1010, tender_id: 1011, keyword: 'unicorn', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1011, tender_id: 1012, keyword: 'kidney', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1012, tender_id: 1006, keyword: 'civil war', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1013, tender_id: 1008, keyword: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1014, tender_id: 1009, keyword: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1015, tender_id: 1010, keyword: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1016, tender_id: 1008, keyword: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('keywords').insert({id: 1017, tender_id: 1009, keyword: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

      ]);
    });
};
