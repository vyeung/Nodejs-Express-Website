var express = require("express");
var router = express.Router();

//speakers route
router.get("/speakers", function(req, res)
{
    var info = "";
    var dataFile = req.app.get("appData");  //from app.js

    dataFile.speakers.forEach(function(item)
    {
        //template string
        info += `
        <ul>
            <li>
                <h2>${item.name}</h2> 
                <img src="images/speakers/${item.shortname}_tn.jpg" alt="speaker">
                <p>${item.summary}</p>
            </li>
        </ul>
        `;
    });

    //print info after h1 header
    res.send(`
        <link rel="stylesheet" href="css/style.css" type="text/css">    
        <h1>Roux Academy Meetups</h1>
        ${info}
    `);
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