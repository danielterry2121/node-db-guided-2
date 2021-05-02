const knex = require('knex');
const config = require("../knexfile.js")
//if node environment is production use the production database otherwise use developkment
const db = knex(process.env.NODE_ENV === "production" ? config.production : config.development);

module.exports = db