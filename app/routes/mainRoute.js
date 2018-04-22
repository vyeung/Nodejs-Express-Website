var express = require("express");
var router = express.Router();  //create instance of Router object

//homepage
router.get("/", function(req, res)
{
    res.send(`
        <h1>Welcome</h1>
        <p>Roux Academy Meetups gets artists together from all walks of life</p>
    `);
});

//so app.js can use this 
module.exports = router;