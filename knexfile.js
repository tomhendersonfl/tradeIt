// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tradeit_development'
  },
  production: {
    client: 'pg',
    connection: process.env.database_url + '?ssl=true'
  }

};
