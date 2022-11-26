// node_file server system
var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if (path.extname(q.pathname) == ".js") {
      res.end("trying to access js files");
    } else {
      var filename = "." + q.pathname; // filename= ./filename.extension
      fs.readFile(filename, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found"); // file not found
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(5000);
