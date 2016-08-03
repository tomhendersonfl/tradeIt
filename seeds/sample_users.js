exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, first_name: 'Tom', last_name: 'Henderson', email_address: 'tomhendersonfl@gmail.com', state: 'verified', is_administrator: true, created_at: CURRENT_TIMESTAMP}),

        knex('users').insert({id: 2, first_name: 'Kendra', last_name: 'Lyndon', email_address: 'kendralyndon@gmail.com', state: 'verified', is_administrator: true, created_at: CURRENT_TIMESTAMP}),

        knex('users').insert({id: 3, first_name: 'Jessica', last_name: 'Lee', email_address: 'jesslee1315@gmail.com', state: 'verified', is_administrator: true, created_at: CURRENT_TIMESTAMP}),

        knex('users').insert({id: 4, first_name: 'Jim', last_name: 'Watkins', email_address: 'kunversion.jim@gmail.com', state: 'verified', is_administrator: true, created_at: CURRENT_TIMESTAMP}),

        knex('users').insert({id: 5, first_name: 'Scott', last_name: 'Wilkins', email_address: 'scottjeffreywilkins@gmail.com', state: 'verified', is_administrator: true, created_at: CURRENT_TIMESTAMP})
      ]);
    });
};
