var http = require('http'),
	url = require('url'),
	port = Number(process.argv[2])

var server = http.createServer(function(req, res) {
	
	var answer = url.parse(req.url, true);
	var d = new Date(answer.query.iso);

	if(answer.pathname === '/api/parsetime') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		var timeResponse = {
			hour: d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()
		}
		res.end(JSON.stringify(timeResponse));
	} else if(answer.pathname === '/api/unixtime') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		var unixResponse = {
			unixtime: d.getTime()
		}

		res.end(JSON.stringify(unixResponse));
	} else {
		console.log('path name not recognized');
	}

}).listen(port)



//OR

   var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))