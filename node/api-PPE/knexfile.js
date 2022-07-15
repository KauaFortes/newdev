module.exports = {
  development : {
    client: 'sqlite3',
    connection: {
      filename: 'dev.sqlite3'
    },
    pool: {
      afterCreate: function (connection, cb) {
        console.log('executando after create database')
        connection.run('PRAGMA foreing_keys = ON', cb)
      }
    },
    useNullasDefailt: true,
    migrations: {
      directory: __dirname + '/SRC/databases/migrations'
    }, 
    seeds: {
      directory: __dirname + '/SRC/databases/seeds'
    }
  },
production : {
    client: 'mysql'
  }
}