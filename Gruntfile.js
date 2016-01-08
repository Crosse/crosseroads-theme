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
            target: {
                files: {
                    'static/css/screen.css': 'static/css/screen.css'
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['compass:dist', 'cssmin']);
};
