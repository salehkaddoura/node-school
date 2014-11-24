var fs = require('fs'),
	path = require('path'),
	file = process.argv[2],
	ext = process.argv[3],
	splitExt

fs.readdir(file, function(err, files) {
	if (err) console.log(err);
	for (i = 0; i < files.length; i++) {
		splitExt = path.extname(files[i]).split('.');
		if(ext === splitExt[splitExt.length - 1]) {
			console.log(files[i]);
		}
	};

});




//OR

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function (file) {
   		if (path.extname(file) === '.' + process.argv[3])
   			console.log(file)
   	});
});