var mysql = require('mysql');
var fs = require('fs');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Nikita18",
    database:'backend'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports.con=con;