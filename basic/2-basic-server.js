//http basic module
var http = require("http");

function serverCode(req, res) {
    res.writeHead(200, { "content-Type": "text/plain" }); // set header
    res.end("Hello world"); // response send
  }

http
  .createServer(serverCode)
  .listen(5000); // listen in the port
console.log("server started on port :5000...."); // msg for server that the server started
