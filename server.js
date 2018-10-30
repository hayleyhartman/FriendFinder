var express = require('express')
var apiRoutes = require('./app/routing/apiRoutes')
var htmlRoutes = require('./app/routing/htmlRoutes')
var app = express()

// app.use apiroutes and htmlroutes after regular app.use stuff
app.use(apiRoutes)
app.use(htmlRoutes)

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  