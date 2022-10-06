$('.customize__slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });







  const cards = document.querySelectorAll('.js-card');

  VanillaTilt.init(cards, {
    max: 10,
    glare:false,
});
