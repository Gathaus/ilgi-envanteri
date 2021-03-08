'use strict';

const mysql = require('mysql2');

var con = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b7ef3f2ee807bf",
  password: "99e6dce6",
  database: "heroku_cab903e0bd5020d"
});

con.connect(function(err) {
  if (err) throw err;

  console.log("MySql bağlantısı gerçekleşti")
});

module.exports = con;