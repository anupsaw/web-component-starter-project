var express = require('express');
var path = require('path');

var app = express()
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/dist'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})





app.listen(port, function (req, res) {
    console.log("Server is listening on port "+ port);

})