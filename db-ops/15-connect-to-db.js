var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port:3306
});

con.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
  con.destroy();
  console.log("DB Closed!");
});

