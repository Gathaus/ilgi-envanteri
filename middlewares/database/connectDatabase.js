'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ilgienvanteri"
});

con.connect(function(err) {
  if (err) throw err;

  console.log("MySql bağlantısı gerçekleşti")
});

module.exports = con;