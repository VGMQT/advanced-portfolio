'use strict';

module.exports = function() {
  $.gulp.task('svg:sprite', function() {
    return $.gulp.src($.config.dev + '/images/sprites/svg/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[stroke-width]').removeAttr('stroke-width');
          $('[stroke-linecap]').removeAttr('stroke-linecap');
          $('[stroke-linejoin]').removeAttr('stroke-linejoin');
          $('[stroke-miterlimit]').removeAttr('stroke-miterlimit');
          $('[styles]').removeAttr('style');
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg"
          }
        }
      }))
      .pipe($.gulp.dest($.config.build + '/images/sprites'));
  });
};