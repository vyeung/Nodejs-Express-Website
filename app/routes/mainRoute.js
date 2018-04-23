var express = require("express");
var router = express.Router();  //create instance of Router object

//homepage
router.get("/", function(req, res)
{
    var data = req.app.get("appData");
    var homepagePhotos = [];
    var pageSpeakers = data.speakers;

    //show all artwork on homepage
    data.speakers.forEach(function(item)
    {
        homepagePhotos = homepagePhotos.concat(item.artwork);
    });

    //render our homepage with index.ejs specified in app.js
    res.render("index",
    {
        //some local variables that are used in index.ejs
        pageTitle: "Home",
        artwork: homepagePhotos,
        speakers: pageSpeakers,
        pageID: "home"
    });
});

//so app.js can use this 
module.exports = router;