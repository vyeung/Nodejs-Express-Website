var express = require("express");
var router = express.Router();  //create instance of Router object

//chat page
router.get("/chat", function(req, res)
{
    //render our chat page with chat.ejs specified in app.js
    res.render("chat",
    {
        //some local variables that are used in chat.ejs
        pageTitle: "Chat",
        pageID: "chat"
    });
});

//so app.js can use this 
module.exports = router;