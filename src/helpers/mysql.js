require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE,DB_PORT } = process.env
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log(err)
  }
  console.log('connected to db mysql')
})

module.exports = connection