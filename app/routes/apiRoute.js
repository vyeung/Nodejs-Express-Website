var express = require("express");
var router = express.Router();  //create instance of Router object
var feedbackData = require("../data/feedback.json");

//api route
router.get("/api", function(req, res)
{
    res.json(feedbackData);
});

//so app.js can use this 
module.exports = router;