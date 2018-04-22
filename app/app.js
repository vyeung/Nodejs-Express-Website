var express = require("express");
var app = express();
var dataFile = require("./data/data.json");

//allow for a flexible port number by setting an environment variable. 
//default to port 3000 if not specifying one
app.set("port", process.env.PORT || 3000);

//homepage
app.get("/", function(req, res)
{
    res.send(`
        <h1>Welcome</h1>
        <p>Roux Academy Meetups gets artists together from all walks of life</p>
    `);
});

//speakers route
app.get("/speakers", function(req, res)
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

//individual speaker route. path has a speakerid var that we made.
//since we have 3 ppl, speakerid can be 0,1,2 
app.get("/speakers/:speakerid", function(req, res)
{
    //how speaker gets its info
    var speaker = dataFile.speakers[req.params.speakerid];

    //respond with info about an individual speaker
    res.send(`
        <h1>${speaker.title}</h1>
        <h2>with ${speaker.name}</h2>
        <p>${speaker.summary}</p>
    `);
});

var server = app.listen(app.get("port"), function()
{
    console.log("listening on port " + app.get("port"));
});


