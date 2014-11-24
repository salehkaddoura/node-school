var fs = require('fs'),
	path = require('path'),
	splitExt,
	answers = []

module.exports = function(dir, ext, callback) {
			fs.readdir(dir, function(err, files) {
				if (err) return callback(err);
				for (i = 0; i < files.length; i++) {
					splitExt = path.extname(files[i]).split('.');
					if(ext === splitExt[splitExt.length - 1]) {
						answers.push(files[i]);
					}
				};
				callback(null, answers);
			});
		}



//OR

   var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }