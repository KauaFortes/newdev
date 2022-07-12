module.exports = {
  development : {
    client: 'sqlite3',
    connection: {
      filename: 'dev.sqlite3'
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