exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, first_name: 'Guest', last_name: 'User', email_address: 'guest@tradeit.com', state: 'unverified', is_administrator: false, created_at: '2016-01-01'})
        ]);
    });
};
