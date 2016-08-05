exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(function () {
      return Promise.all([
        knex('notes').insert({id: 1001, tender_id: 1001, note_text: 'The sandwich is over 10 years old but has no mold on.  That proves it is of divine origin.', created_at: '2016-04-01', updated_at: '2016-04-02'})

      ]);
    });
};
