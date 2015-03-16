'use strict';

module.exports = function(grunt){
  var port_prod = 8888;
  var port_dev = 8888;
  grunt.initConfig({
    express: {
      options: {
        script: './server.js'
      },
      production: {
        options: {
          port: port_prod,
          node_env: 'production'
        }
      },
      development: {
        options: {
          port: port_dev,
          node_env: 'development'
        }
      }
    },
    watch: {
      less: {
        files: [
          'www/app/**/*.less'
        ],
        tasks: ['less:all']
      }
    },
    less: {
      all: {
        options: {
          paths: ['www/app']
        },
        files: {
          'www/app/app.css': 'www/app/app.less'
        }
      }
    },
    useminPrepare: {
      html: 'www/index.html',
      options: {
        dest: 'build'
      }
    },
    usemin: {
      html: 'build/index.html'
    },
    copy: {
      build: {
        files: [{
          expand: true,
          dest: 'build',
          cwd: 'www',
          src: ['**/*.html', '!bower_components/**/*', 'assets/**/*']
        }, {
          expand: true,
          dest: 'build',
          cwd: 'www/bower_components/font-awesome/',
          src: ['fonts/*']
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', [
    'less', 
    'copy:build', 
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'usemin'
  ]);

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async();
  });

  grunt.registerTask('serve', function(mode){
    if(mode === 'production'){
      return grunt.task.run(['build', 'express:production', 'express-keepalive']);
    }

    return grunt.task.run(['express:development', 'express-keepalive']);
  });

  grunt.registerTask('default', ['serve']);
};