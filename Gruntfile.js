'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    watch: {
      less: {
        files: [
          'www/**/*.less'
        ],
        tasks: ['less:all']
      }
    },
    less: {
      all: {
        options: {
          paths: ['www/']
        },
        files: {
          'www/app.css': 'www/app.less'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', []);
  grunt.registerTask('serve', []);
  grunt.registerTask('default', ['serve']);
};