module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    sourcemap: true,
                    sassDir: 'sass',
                    cssDir: 'static/css',
                    outputStyle: 'expanded',
                }
            },
            watch: {
                options: {
                    sourcemap: true,
                    sassDir: 'sass',
                    cssDir: 'static/css',
                    outputStyle: 'expanded',
                    watch: true
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'static/css/screen.min.css': 'static/css/screen.css'
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', 'Build the theme.', ['compass:dist', 'cssmin']);
};
