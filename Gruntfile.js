module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),
    copy : {
      angular_vendor: {
        files:[
          {
            src: ['bower_components/angular/angular.js'],
            dest: 'sample/scripts/vendor.js',
          }
        ]
      }
    },
    concat: {
      options: {
        separator: ";",
      },
      datepicker_lib: {
        src: ['scripts/utils.js',
              'scripts/config.js',
              'scripts/app.js',
              'scripts/directives/datepicker.js'],
              // 'scripts/services/*.js',
              // 'scripts/controllers/*.js'],
            dest: 'sample/scripts/application.js',
        nonull: true
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      mweb_js: {
        files: {
          'application.min.js': ['application.js']
        }
      }
    },
    watch: {
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['default']
      }
    }
  });

  grunt.registerTask('default', [
    'copy',
    'concat',
    // 'uglify'
  ]);
}


