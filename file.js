var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Meet@2001",
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM sakila.actor", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});