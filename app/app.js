var express = require("express");
var app = express();
var dataFile = require("./data/data.json");
var io = require("socket.io")();

//allow for a flexible port number by setting an environment variable. 
//default to port 3000 if not specifying one
app.set("port", process.env.PORT || 3000);

//doing appData=dataFile so all routes can access
app.set("appData", dataFile);

//using ejs template engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

//globabl variables that can be used in all views
app.locals.siteTitle = "Roux Meetups";
app.locals.allSpeakers = dataFile.speakers;

//public folder has all our static files. let it be available to all our docs.
app.use(express.static("./app/public"));

//connect routes
app.use(require("./routes/mainRoute"));
app.use(require("./routes/speakersInfo"));
app.use(require("./routes/feedbackRoute"));
app.use(require("./routes/apiRoute"));
app.use(require("./routes/chatRoute"));

var server = app.listen(app.get("port"), function()
{
    console.log("listening on port " + app.get("port"));
});

io.attach(server);  //socket.io and server are now connected

io.on("connection", function(socket)
{
    console.log("User Connected");
    socket.on("postMessage", function(data)
    {
        io.emit("updateMessages", data);
    });
});
