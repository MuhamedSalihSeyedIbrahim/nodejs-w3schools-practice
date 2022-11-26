//events 2
var fs = require("fs");
var http = require("http");
var events = require("events");

var eventEmitter = new events.EventEmitter();
http
  .createServer(function (req, res) {
    //Create an event handler:
    var myEventHandler = function () {
      console.log("I hear a scream!");
    };
    //Assign the eventhandler to an event:
    eventEmitter.on("scream", myEventHandler);
    //Fire the 'scream' event:
    eventEmitter.emit("scream");

    res.writeHead(200, { "content-Type": "text/html" });
    res.write("the serverside event is fired ('scream')");
    res.end();
  })
  .listen(5000);
console.log("server started on port :5000....");
