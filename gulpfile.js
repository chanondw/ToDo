var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');
var sass = require('gulp-sass');

gulp.task('js', function () {
	return browserify({debug:true})
	.transform(babelify.configure({presets: ["es2015", "react"]}))
	.require('Src/ToDo/react/entry.js', { entry: true })
	.bundle()
	.on("error", function (err) {console.log ("Error: " + err.message); })
	.pipe(fs.createWriteStream("Src/ToDo/Scripts/bundle.js"));
});

gulp.task('style', function() {
	return gulp.src('Src/ToDo/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('Src/ToDo/Styles/'));
});

gulp.task('default', function () {
	gulp.watch('Src/ToDo/sass/**/*.scss', ['style']);
	gulp.watch('Src/ToDo/react/*.js', ['js'])
});