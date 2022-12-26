const mysql = require('mysql2')
// require('dotenv').config()
const pool = mysql
  .createPool({
    host: 'localhost',
    user: 'root',
    database: 'sys',
    password: 'Ganbat123!',
    connectionLimit: 2,
  })
  .promise()

module.exports = pool

// const mysql2 = require('mysql2');
// require('dotenv').config()
// // require('dotenv').config({ debug: true })S
// console.log(process.env.host)

// const pool = mysql2.createPool({
//     host:process.env.HOST,
//     user:process.env.DB_USER,
//     database:process.env.DATABASE,
//     password:process.env.PASSWORD,
//     connectionLimit:2,
// }).promise()
