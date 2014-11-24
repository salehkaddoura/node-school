var fs = require('fs'),
	file = process.argv[2],
	bufString,
	lineCount = 0;

fs.readFile(file, 'utf8', function (err, data) {
	if (err) throw err;
	bufString = data.toString().split('\n');
	lineCount = bufString.length - 1;
	console.log(lineCount);
}); 


//OR

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, contents) {
// fs.readFile(file, 'utf8', callback) can also be used
	var lines = contents.toString().split('\n').length - 1;
	console.log(lines)
});





// bufString = buf.toString().split("\n");
// lineCount = bufString.length - 1;

// console.log(lineCount);