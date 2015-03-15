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
};