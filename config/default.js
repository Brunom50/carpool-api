
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
      database: 'application',
      host: 'localhost',
      password: 'mintpass',
      port: 5432,
      user: 'mintuser'
    }
  },
  server: {
    port: 3000
  }
};

