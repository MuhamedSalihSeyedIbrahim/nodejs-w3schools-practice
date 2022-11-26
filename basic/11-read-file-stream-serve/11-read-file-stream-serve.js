//events
var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    var readStream = fs.createReadStream("./11-index.html");
    readStream.on("open", function () {
      //event listener
      console.log("The file is open");
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(
        "the on event listener deducts opening of file on server-side"
      );
      res.end();
    });
  })
  .listen(5000);
console.log("server started on port :5000....");
