const environment = process.env.ENVIRONMENT || 'development'

const config = require('../../knexfile')[environment]

const knex = require('knex')(config)
/*const knexInstance = knex(config)*/

module.exports = knex