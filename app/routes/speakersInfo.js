var express = require("express");
var router = express.Router();

//speakers route
router.get("/speakers", function(req, res)
{
    var data = req.app.get("appData");
    var speakerPhotos = [];
    var pageSpeakers = data.speakers;

    //show all artwork on page
    data.speakers.forEach(function(item)
    {
        speakerPhotos = speakerPhotos.concat(item.artwork);
    });

    //render speaker page with speakers.ejs specified in app.js
    res.render("speakers",
    {
        //some local variables that are used in index.ejs
        pageTitle: "Speakers",
        artwork: speakerPhotos,
        speakers: pageSpeakers,
        pageID: "speakers"
    });
});

//individual speaker route. path has a speakerid var that we made. can be 0,1,2
router.get("/speakers/:speakerid", function(req, res)
{
    var dataFile = req.app.get("appData");  //from app.js

    //how speaker gets its info
    var speaker = dataFile.speakers[req.params.speakerid];

    //respond with info about an individual speaker
    //forward / in front of css and images here is necessary
    res.send(`
        <link rel="stylesheet" href="/css/style.css" type="text/css">
        <h1>${speaker.title}</h1>
        <h2>with ${speaker.name}</h2>
        <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
        <p>${speaker.summary}</p>
    `);
});

//so app.js can use this
module.exports = router;