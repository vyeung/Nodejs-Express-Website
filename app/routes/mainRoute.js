var express = require("express");
var router = express.Router();  //create instance of Router object

//homepage
router.get("/", function(req, res)
{
    res.send(`
        <link rel="stylesheet" href="css/style.css" type="text/css">
        <h1>Welcome</h1>
        <img src="images/misc/background.jpg" alt="background" style="height: 300px;">
        <p>Roux Academy Meetups gets artists together from all walks of life</p>
    `);
});

//so app.js can use this 
module.exports = router;