var mysql = require("mysql");
var stringify = require("node-stringify");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  port: 3306,
});

con.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("Connected!");

  var sql = "select * from test";
  con.query(sql, function (err, result) {
    if (err) {
      throw err;
    }
    console.log("Results:")
    console.table(result);
    con.destroy();
  });
});
