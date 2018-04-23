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
        pageID: "speakerList"
    });
});

//individual speaker route. path has a speakerid var that we made. can be 0,1,2
router.get("/speakers/:speakerid", function(req, res)
{
    var data = req.app.get("appData");
    var speakerPhotos = [];
    var pageSpeakers = [];

    data.speakers.forEach(function(item)
    {
        //show info for just our selected artist
        if(item.shortname === req.params.speakerid) {
            pageSpeakers.push(item);
            speakerPhotos = speakerPhotos.concat(item.artwork);
        }
    });

    res.render("speakers",
    {
        //some local variables that are used in index.ejs
        pageTitle: "Speakers",
        artwork: speakerPhotos,
        speakers: pageSpeakers,
        pageID: "speakerDetail"
    });
});

//so app.js can use this
module.exports = router;