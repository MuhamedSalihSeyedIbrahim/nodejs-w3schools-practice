//url get request querying depth
//req get url:http://127.0.0.1:5000/default.htm?value1=hello&value2=hai
var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-Type": "text/plain" });
    var q = url.parse(req.url, true); // url parsing
    console.log(req.url); // write the requesting url
    var qdata = q.query;
    var values = "value1=" + qdata.value1 + "\nvalue2=" + qdata.value2; // query for  the values
    values +=
      "\npathname=" +
      q.pathname +
      "\nquery json=" +
      q.search;
    /*
    q.pathname ---returns '/default.htm'
    q.search ---returns '?year=2017&month=february'
    q.query ---returns an object: { year: 2017, month: 'february' }
    q.value --- returns 'values-data'
*/
    res.write("Request value catch : \n" + values); //write the queried values to client
    res.end();
  })
  .listen(5000);
console.log("server started on port :5000....");
