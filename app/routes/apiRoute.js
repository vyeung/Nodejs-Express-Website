var express = require("express");
var router = express.Router();  //create instance of Router object
var feedbackData = require("../data/feedback.json");
var bodyParser = require("body-parser");
var fs = require("fs");

//api route
router.get("/api", function(req, res)
{
    res.json(feedbackData);
});

//parse stuff that user entered
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

//handle POST data
router.post("/api", function(req, res)
{
    //make new post show up at top, not bottom
    feedbackData.unshift(req.body); 
    
    //save data to the feedback.json file
    fs.writeFile("app/data/feedback.json", JSON.stringify(feedbackData), "UTF-8", function(err)
    {
        console.log(err);
    });

    res.json(feedbackData);
});

//so app.js can use this 
module.exports = router;