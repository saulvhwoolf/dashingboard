var express = require('express');
var app = express();

//setting middleware
app.use(express.static('public'));

console.log("application running at localhost:5000")

var server = app.listen(5000);
