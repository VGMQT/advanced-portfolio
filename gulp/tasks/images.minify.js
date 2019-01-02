'use strict';

module.exports = function() {
    $.gulp.task('images:minify', function() {
        return $.gulp.src($.config.dev + '/images/**/*.*', { since: $.gulp.lastRun('images:minify') })
            .pipe($.gp.imagemin([
                $.gp.imagemin.svgo({
                    plugins: [
                        {cleanupIDs: false},
                        {removeUselessDefs: false},
                        {removeViewBox: true}
                    ]
                })
            ]))
            .pipe($.gulp.dest($.config.dev + '/images'));
    });
};