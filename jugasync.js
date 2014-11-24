var http = require('http'),
	concat = require('concat-stream'),
	output = [],
	count = 0,
	args = process.argv.length - 2

function printResults() {
	for(var j = 0; j < args; j++) 
		console.log(output[j]);
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(response) {
		response.pipe(concat(function(data) {
			output[index] = data.toString()
			count++;
			if (count == args) 
				printResults();
		}));
	});
}

for (var i = 0; i < args; i++)
	httpGet(i);


//OR

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3) // yay! we are the last one!
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)