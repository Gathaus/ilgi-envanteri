'use strict';

const mysql = require('mysql2');

var con = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b082b242f5186f",
  password: "444833c0",
  database: "heroku_c7c47e9b86ded5d"
});

con.connect(function(err) {
  if (err) throw err;

  console.log("MySql bağlantısı gerçekleşti")
});

module.exports = con;