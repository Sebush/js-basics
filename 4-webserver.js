var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/test', function (req, res) {
    res.send('meine test-seite');
});

app.get('/addiere/:a/:b', function (req, res) {
    var a = Number.parseFloat(req.params.a)  // sting zu zahl konvertieren
    var b = Number.parseFloat(req.params.b)
    res.send(a + ' + ' + b + ' = ' + (a + b));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000! open localhost:3000');
});