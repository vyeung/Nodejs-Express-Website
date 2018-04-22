var express = require("express");
var router = express.Router();  //create instance of Router object

//homepage
router.get("/", function(req, res)
{
    //render our homepage with index.ejs specified in app.js
    res.render("index",
    {
        //some local variables that are used in index.ejs
        pageTitle: "Home",
        pageID: "home"
    });
});

//so app.js can use this 
module.exports = router;