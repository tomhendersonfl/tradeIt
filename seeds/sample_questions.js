exports.seed: function(knex, Promise) {
  return knex('questions').del()
    .then(function () {
      return Promise.all([
        knex('questions').insert({id: 1001, tender_id: 1007, question: 'How did you discover the meaning of life?', answer: 'Lots and lots of mushrooms' created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('questions').insert({id: 1002, tender_id: 1008, question: 'How long is the willy warmer?', answer: 'Long enough for most.' created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('questions').insert({id: 1003, tender_id: 1009, question: 'How do we know it is the real planet Kolob?', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('questions').insert({id: 1004, tender_id: 1004, question: 'How big are its feet?', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('questions').insert({id: 1005, tender_id: 1004, question: 'How tall is the Bigfoot', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('questions').insert({id: 1006, tender_id: 1001, question: 'How do you know what the Virgin Mary looked like?', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('questions').insert({id: 1007, tender_id: 1001, question: 'What kind of cheese is it?', created_at: '2016-04-01', updated_at: '2016-04-02'}),

      ]);
    });
};
