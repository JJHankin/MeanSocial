var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var stylus = require('gulp-stylus')

gulp.task('css', function() {
	gulp.src('css/**/*.styl')
		.pipe(sourcemaps.init())
			.pipe(stylus())
		.pipe(gulp.dest('assets'))
})