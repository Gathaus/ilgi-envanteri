'use strict';

const mysql = require('mysql2');

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

con.connect(function(err) {
  if (err) throw err;

  console.log("MySql bağlantısı gerçekleşti")
});

module.exports = con;