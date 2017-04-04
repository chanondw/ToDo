var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('default', function () {
	browserify({debug:true})
	.transform(babelify)
	.require('/Src/ToDo/react/entry.js', { entry: true })
	.bundle()
	.on("error", function (err) {console.log ("Error: " + err.message); })
	.pipe(fs.createWriteStream("/Src/ToDo/Scripts/bundle.js"));
});