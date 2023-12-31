
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'xtrem'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Muasa@2020New'),
        ssl: env.bool('DATABASE_SSL', false), // Use boolean value for SSL
      },
      pool: {
        min: 0,
        max: 10,
        acquireTimeoutMillis: 60000,
        idleTimeoutMillis: 60000,
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  });