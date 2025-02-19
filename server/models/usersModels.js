const { Pool } = require('pg');
require('dotenv').config();

// const PG_URI = process.env.PG_URI;
const PG_URI = 'postgres://obzhuzsf:kY_Ho0WRyGVLNlo--Akm8P4VpDR87oDD@batyr.db.elephantsql.com/obzhuzsf'

const pool = new Pool({
  connectionString: PG_URI,
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// Pool - a connection pool is a cache of database connections maintained so that the connections can be reused when future requests to the database are required.

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};