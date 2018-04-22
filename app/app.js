var express = require("express");
var app = express();

app.get("/", function(req, res)
{
    res.send("<h1>Roux Academy Meetups<\h1>");
});

app.listen(3000);
console.log("listening on 3000");



/* non express way
var http = require("http");

var myServer = http.createServer(function(req, res)
{                                        //mime type
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Roux Meetups");
    res.end();
});

myServer.listen(3000);
console.log("listening on 3000");
*/