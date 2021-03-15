'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "kisiselk_root",
  password: "1sH%n4KQFQ~*",
  database: "kisiselk_ilgienvanteri"
});

con.connect(function(err) {
  if (err) throw err;

  console.log("MySql bağlantısı gerçekleşti")
});

module.exports = con;