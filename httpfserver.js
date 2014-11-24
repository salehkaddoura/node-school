var http = require ('http'),
	fs = require ('fs'),
	port = Number(process.argv[2]),
	arg = process.argv[3]


var server = http.createServer(function(req, res) {
	var readStream = fs.createReadStream(arg);

	readStream.on('open', function() {
		readStream.pipe(res);
	})
});
server.listen(port);


//OR

    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))