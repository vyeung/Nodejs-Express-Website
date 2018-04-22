var express = require("express");
var app = express();
var dataFile = require("./data/data.json");

//allow for a flexible port number by setting an environment variable. 
//default to port 3000 if not specifying one
app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res)
{
    var info = "";
    
    dataFile.speakers.forEach(function(item)
    {
        //template string
        info += `
        <ul>
            <li>
                <h2>${item.name}</h2> 
                <p>${item.summary}</p>
            </li>
        </ul>
        `;
    });

    //print info after h1 header
    res.send(`<h1>Roux Academy Meetups</h1>${info}`);
});

var server = app.listen(app.get("port"), function()
{
    console.log("listening on port " + app.get("port"));
});



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