'use strict';

const mysql = require('mysql2');

var con = mysql.createConnection("mysql://b7ef3f2ee807bf:99e6dce6@us-cdbr-east-03.cleardb.com/heroku_cab903e0bd5020d?reconnect=true");

con.connect(function(err) {
  if (err) throw err;

  console.log("MySql bağlantısı gerçekleşti")
});

module.exports = con;