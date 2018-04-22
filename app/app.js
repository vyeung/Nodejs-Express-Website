var express = require("express");
var app = express();
var dataFile = require("./data/data.json");

//allow for a flexible port number by setting an environment variable. 
//default to port 3000 if not specifying one
app.set("port", process.env.PORT || 3000);

//doing appData=dataFile so all routes can access
app.set("appData", dataFile);

//connect routes
app.use(require("./routes/mainRoute"));
app.use(require("./routes/speakersInfo"));

var server = app.listen(app.get("port"), function()
{
    console.log("listening on port " + app.get("port"));
});


