var express = require('express')
var apiRoutes = require('./app/routing/apiRoutes')
var apiRoutes = require('./app/routing/htmlRoutes')


//require apiroutes and htmlroutes

// app.use apiroutes and htmlroutes after regular app.use stuff
app.use(apiRoutes)
app.use(htmlRoutes)