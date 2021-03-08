"use strict";

const mysql = require("mysql");

var con = mysql.createConnection(process.env.DATABASE_URL);

con.connect(function (err) {
  if (err) throw err;

  console.log("MySql bağlantısı gerçekleşti");
});

module.exports = con;
