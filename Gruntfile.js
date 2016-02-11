module.exports = function(grunt) {
	grunt.initConfig({



  concat: {
    css: {
      src: ['src/views/css/bootstrap-grid.css', 'src/views/css/style.css'],
      dest: 'dist/views/css/combined.css',
    },
  },

  cssmin : {
            css:{
                src: 'dist/views/css/combined.css',
                dest: 'dist/views/css/combined.min.css'
            }
        },
  uglify : {
        js: {
            src: ['src/views/js/main.js'],
            dest:  'dist/views/js/min.main.js'
        }
    },
   copy : {
    main: {
      expand: true,
      cwd: 'src/',
      src: ['**/*.html', 'js/*', 'img/*', 'css/*', 'views/images/*'],
      dest: 'dist/'
    }
   }
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', [ 'copy:main', 'concat:css', 'cssmin:css', 'uglify:js' ]);

};