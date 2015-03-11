module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
			uses_defaults: {}
		},
		sass: {
      dev: { 
        options: { sourceMap: true },
        files: { 'assets/dev/css/style.css' : 'assets/dev/scss/style.scss' }
      },
			prod: { 
        options: { 
					sourceMap: false,
					outputStyle: 'compressed'
				},
        files: { 'assets/prod/css/style.css' : 'assets/dev/scss/style.scss' }
      }
    },
		watch: {
			css: {
				files: 'assets/dev/scss/**/*.scss',
				tasks: [ 'sass:dev' ],
				options: { livereload: true }
			},
			html: {
				files: '**/*.html',
				options: { livereload: true }
			}
		}
  });
  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', []);
};