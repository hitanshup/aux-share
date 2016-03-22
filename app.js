var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 3000;

app.use(express.static('public'));
app.use('/bower_components', express.static('bower_components'));
app.use(express.static('source/views'));

http.listen(port, function () {
    console.log('Listening on *:' + port);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/views/index.html');
});