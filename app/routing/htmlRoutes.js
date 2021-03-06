// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

var express = require('express')
var path = require('path')
var router = express.Router()

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  router.get("*", function(req, res) {
    res.redirect('/');
  });



module.exports = router