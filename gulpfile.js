var gulp = require('gulp')
var fs = require('fs')

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])

gulp.task('watch:js', ['js'], function(){
	gulp.watch('ng/**/*.js', ['js'])
})

gulp.task('watch:css', function() {
	gulp.watch('css/**/*.styl', ['css'])
})

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
	require('./gulp/' + task)
})