/**
 * Created by Yigit Yesilpinar on 1.05.2017.
 *
 * Simple server for the client application of Game of Three
 *
 */
var express  = require('express');
var path  = require('path');
var favicon  = require('serve-favicon');

var host = "localhost";
var port = process.env.PORT || 5555;
var app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});

express.static.mime.define({"text/css": ["css"]});
express.static.mime.define({"application/x-font-woff": ["woff"]});
express.static.mime.define({"application/x-font-ttf": ["ttf"]});
express.static.mime.define({"application/vnd.ms-fontobject": ["eot"]});
express.static.mime.define({"font/opentype": ["otf"]});

app.use(favicon(path.resolve(__dirname + '/favicon.ico')));

app.use(express.static('./'));
// All requests to index.html, Single page application, Client for Game of Three
app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, 'index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log(`Express server listening at http://${host}:${port}`);

    }
});

module.exports = app;