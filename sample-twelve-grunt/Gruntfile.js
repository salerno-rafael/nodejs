module.exports = function( grunt ) {

  grunt.initConfig({

    watch : {
      dist : {
        files : ['*.js']
      }
    }, 

    run: {
      server: {
      args: ['server.js']
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt'
        },
        src: ['*.js']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch' );
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask( 'w', [ 'watch' ]);
  grunt.registerTask( 'r' , ['run'] );
  grunt.registerTask('test', 'mochaTest');

};