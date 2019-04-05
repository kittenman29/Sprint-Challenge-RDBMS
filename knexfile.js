// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/rolex.db3',
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: './data/migrations'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done) // enforces foreign keys
      }
    }
  }
};
