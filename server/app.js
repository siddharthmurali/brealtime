var express = require('express');
var app = express();
var path = require('path')
var cors = require('cors');
var bodyParser = require('body-parser');
var PORT = 3000;

app.use(cors());

var allowCrossDomain = function(req,res,next){
    res.header('Access-Control-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);


app.use(bodyParser.urlencoded());


app.use(require("./routes/endpoints/webservice"));


const server = app.listen(PORT, '0.0.0.0')
console.log('Server running on port ' + PORT);
module.exports = app;
