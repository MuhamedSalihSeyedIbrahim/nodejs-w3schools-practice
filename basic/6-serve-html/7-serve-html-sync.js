// file system sync
var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    var file_data = fs.readFileSync("6.1-index.html", "utf8"); //sync method   ,variable contain the file data
    //console.log(file_data); //write the file data in server side
    res.writeHead(200, { "content-Type": "text/html" });
    res.write(file_data + "The sync file read method"); // placing the file_data outside function cause " no read action"
    res.end();
  })
  .listen(5000);
console.log("server started on port :5000....");
