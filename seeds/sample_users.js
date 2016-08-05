exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1001, first_name: 'Tom', last_name: 'Henderson', email_address: 'tomhendersonfl@gmail.com', state: 'verified', is_administrator: true, created_at: '2016-01-01', updated_at: '2016-01-01', username: 'tomhenderson', about_me: 'I reject your reality and substitute my own.'}),

        knex('users').insert({id: 1002, first_name: 'Kendra', last_name: 'Lyndon', email_address: 'kendralyndon@gmail.com', state: 'verified', is_administrator: true, created_at: '2016-01-01', updated_at: '2016-01-01', username: 'kendralyndon', about_me: "If you haven't got anything nice to say about anybody, come sit next to me."

        knex('users').insert({id: 1003, first_name: 'Jessica', last_name: 'Lee', email_address: 'jesslee1315@gmail.com', state: 'verified', is_administrator: true, created_at: '2016-01-01', updated_at: '2016-01-01', username: 'jessicalee', about_me: "I don't like to commit myself about heaven and hell -- you see, I have friends in both places."}),

        knex('users').insert({id: 1004, first_name: 'Jim', last_name: 'Watkins', email_address: 'kunversion.jim@gmail.com', state: 'verified', is_administrator: true, created_at: '2016-01-01', updated_at: '2016-01-01', username: 'jimwatkins', about_me: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind."}),

        knex('users').insert({id: 1005, first_name: 'Scott', last_name: 'Wilkins', email_address: 'scottjeffreywilkins@gmail.com', state: 'verified', is_administrator: true, created_at: '2016-01-01', updated_at: '2016-01-01', username: 'scottwilkins', about_me: "The reason I talk to myself is that I'm the only one whose answers I accept."}),

        knex('users').insert({id: 1006, first_name: 'Fred', last_name: 'Flintstone', email_address: 'fredflintstone@gmail.com', state: 'verified', is_administrator: false, created_at: '2016-03-01', updated_at: '2016-03-01', username: 'fredflintstone', about_me: "Yabba Dabba Do!"}),

        knex('users').insert({id: 1007, first_name: 'Wilma', last_name: 'Flintstone', email_address: 'wilmaflintstone@gmail.com', state: 'verified', is_administrator: false, created_at: '2016-01-01', updated_at: '2016-03-01', username: 'wilmaflintstone', about_me: "Have you ever felt so alone and nothing makes sense? Well that’s how I feel right now…I feel like I’m facing everything myself, with nothing but tears and a fake smile"}),

        knex('users').insert({id: 1008, first_name: 'Barney', last_name: 'Rubble', email_address: 'barneyrubble@gmail.com', state: 'verified', is_administrator: false, created_at: '2016-01-01', updated_at: '2016-01-01', username: 'goofy_pants', about_me: "Everything I like is either illegal, immoral, fattening, addictive, expensive, or impossible."}),

        knex('users').insert({id: 1009, first_name: 'Dino', last_name: 'Flintstone', email_address: 'dino@gmail.com', state: 'verified', is_administrator: false, created_at: '2016-01-01', updated_at: '2016-01-01', username: 'sauropod', about_me: "Everything I like is either illegal, immoral, fattening, addictive, expensive, or impossible."}),

        knex('users').insert({id: 1010, first_name: 'Betty', last_name: 'Rubble', email_address: 'bettyrubble@gmail.com', state: 'verified', is_administrator: false, created_at: '2016-01-01', updated_at: '2016-01-01', username: 'betty_boop', about_me: "I wish my eyes could take photos."}),

        knex('users').insert({id: 999, first_name: 'Guest', last_name: 'User', email_address: 'guest@tradeit.com', state: 'unverified', is_administrator: false, created_at: '2016-01-01'}, updated_at: '2016-01-01', username: 'guestuser', about_me:)

      ]);
    });
};
