var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    switch (request.url) {
    case '/api':
        setTimeout(function () {
            response.writeHead(200);
            response.end('Woo, finally done!');
        }, 5000);
        break;
    default:
        var filename = __dirname + request.url;
        var readStream = fs.createReadStream(filename);
        readStream.on('open', function () {
            readStream.pipe(response);
        });
        readStream.on('error', function (error) {
            response.writeHead(404);
            response.end(error.toString());
        });
    }
});

server.listen(3000);
