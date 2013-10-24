jQuery(function($) {
  var selector = '.headshot img',
      image = Filtrr2(selector);

  image.ready(function() {
    this.sepia().expose(-20).render();
    $(image.canvas).addClass('circular');
    window.meow = image;
  });
});
