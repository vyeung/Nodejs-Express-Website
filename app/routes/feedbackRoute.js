var express = require("express");
var router = express.Router();  //create instance of Router object

//feedback page
router.get("/feedback", function(req, res)
{
    //render our feedback page with feedback.ejs specified in app.js
    res.render("feedback",
    {
        //some local variables that are used in feedback.ejs
        pageTitle: "Feedback",
        pageID: "feedback"
    });
});

//so app.js can use this 
module.exports = router;