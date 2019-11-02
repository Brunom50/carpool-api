
/**
 * Export `default` configuration.
 */

module.exports = {
  cors: {
    origin: '*'
  },
  database: {
    client: 'postgres',
    connection: {
      charset: 'utf8',
      database: 'carpool',
      host: 'localhost',
      password: '',
      port: 5432,
      user: 'postgres'
    },
    schema: 'carpool'
  },
  server: {
    port: 3000
  }
};

