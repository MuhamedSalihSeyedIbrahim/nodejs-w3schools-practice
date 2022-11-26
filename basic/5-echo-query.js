//url get request querying
//req get url:http://127.0.0.1:5000/default.htm?value1=hello&value2=hai

var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-Type": "text/plain" });
    var q = url.parse(req.url, true).query; // url parsing
    var values = "value1=" + q.value1 + "\n" + "value2=" + q.value2; // query for  the values
    res.write("The url get request value catch : \n" + values); //write the queried values to client
    if (values) console.log("The url get request value catch : \n" + values); //write the queied calues to server
    // the req print the if segment two time one for undefined and other as defined
    res.end();
  })
  .listen(5000);
console.log("server started on port :5000....");
