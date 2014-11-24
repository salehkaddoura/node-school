var fs = require('fs'),
	file = process.argv[2],
	buf,
	bufString,
	lineCount = 0;

buf = fs.readFileSync(file, 'utf8'); 
bufString = buf.toString().split("\n");
lineCount = bufString.length - 1;

console.log(lineCount);

//OR

var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;
console.log(lines);