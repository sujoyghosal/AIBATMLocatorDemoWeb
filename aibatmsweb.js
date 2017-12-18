var express = require("express");
var app = express();
var path = require("path");

app.use(express.static('www'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
})
var PORT = process.env.VCAP_APP_PORT || 7000;
app.listen(PORT);
console.log('Server is listening to http://localhost/ on port ' + PORT);