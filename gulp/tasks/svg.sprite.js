'use strict';

module.exports = function() {
  $.gulp.task('svg.sprites', function() {
// Basic configuration example
    var config = {
      mode: {
        symbol: {
          dest: './',     //base directory
          sprite: 'assets/img/svg-sprite',          //Sprite location
          render: {
            scss: {
              dest: '../source/style/common/svg-sprite', //CSS stylesheet location
            }
          }
        }
      }
    };
    return $.gulp.src('./source/images/icons/**/*.svg')
      .pipe($.gp.svgSprite(config))
      .pipe($.gulp.dest('./build'));
  });
};