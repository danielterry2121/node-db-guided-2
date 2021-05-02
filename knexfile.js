// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db'
    },
    useNullAsDefault: true,
    migrations:{
      directory:"./data/migrations"
    },
    seeds:{
      directory: "./data/seeds"
    }
  },

  staging: {

  },

  production: {

  }

};
