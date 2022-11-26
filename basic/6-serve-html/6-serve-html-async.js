// file system async
var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    var file_data = ""; // contain the file data
    fs.readFile("6.1-index.html", fileasyncread(err, data));
    function fileasyncread(err, data) {
      if (err) throw error;
      file_data += data;
      //console.log(file_data); //file read write in server
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(file_data + "The async file read method"); // placing the file_data outside function cause " no read action"
      res.end();
    } //async method
  })
  .listen(5000);

console.log("server started on port :5000....");
