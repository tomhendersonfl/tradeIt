exports.seed = function(knex, Promise) {
  return knex('tenders').del()
    .then(function () {
      return Promise.all([
        knex('tenders').insert({id: 1, name: 'test tender', state: 'draft', description: 'test tender', tender_type: 'services', user_id: 1, }),
      ]);
    });
};
