jQuery(function($) {
  $.supersized({
    // Options
    keyboard_nav: 0,
    random: 1,
    transition_speed: 1000,

    // Defaults
    slide_interval: 5000,
    autoplay: true,
    transition: 1, // fade

    slides: (function(max) {
      var i, _slides = [];

      for(i=1; i <= max; i = ++i) {
        _slides.push({
          image: 'img/pics/' + i + '.jpg'
        });
      }

      return _slides;
    })(19) // Number of images
  });
});
