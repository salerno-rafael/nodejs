var gulp   = require( 'gulp' ),
    server = require( 'gulp-develop-server' ),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util');

gulp.task( 'server:start', function() {
    server.listen( { path: 'server.js' } );
});
 
gulp.task('hint', function () { 
	gulp
	  .src(['*.js', 'public/js/*.js'])
	  .pipe(jshint())
	  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {

    gulp.watch('*.js', function(event) {
        gutil.log('File '+event.path+' was '+event.type+', running tasks...');
   		
    });
    gulp.run('server:start');
});