// Update with your config settings.
require('dotenv').config({ path: __dirname + '/.env' })
module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8'
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds'
  }

};