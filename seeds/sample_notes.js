exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(function () {
      return Promise.all([
        knex('notes').insert({id: 1001, tender_id = 1001, note_text: 'The sandwich is over 10 years old but has no mold on.  That proves it is of divine origin.', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1002, tender_id = 1003, note_text: 'illinois', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1003, tender_id = 1004, note_text: 'mummy', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1004, tender_id = 1005, note_text: 'internet', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1005, tender_id = 1006, note_text: 'dirt', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1006, tender_id = 1007, note_text: 'life', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1007, tender_id = 1008, note_text: 'willy', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1008, tender_id = 1009, note_text: 'planet', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1009, tender_id = 1010, note_text: 'doll', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1010, tender_id = 1011, note_text: 'unicorn', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1011, tender_id = 1012, note_text: 'kidney', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1012, tender_id = 1006, note_text: 'civil war', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1013, tender_id = 1008, note_text: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1014, tender_id = 1009, note_text: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1015, tender_id = 1010, note_text: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1016, tender_id = 1008, note_text: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

        knex('notes').insert({id: 1017, tender_id = 1009, note_text: 'warmer', created_at: '2016-04-01', updated_at: '2016-04-02'}),

      ]);
    });
};
