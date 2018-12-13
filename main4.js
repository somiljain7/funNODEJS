var http = require('http');
var dt = require('./main3');

http.createServer(function (req, res) {
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080); 