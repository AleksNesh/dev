'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./sass/*.sass')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('./build/css'));
});

gulp.task('default', function() {
	gulp.run('sass');

	gulp.watch("./sass/*.sass", function(event) {
		gulp.run('sass');
	});
});