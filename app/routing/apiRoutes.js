// Your apiRoutes.js file should contain two routes:
var express = require('express')
var router = express.Router()
var friends = require('../data/friends')
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//router.get and router.post

module.exports = router