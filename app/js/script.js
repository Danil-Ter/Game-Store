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

let lastScroll = 0;
const defaultOffset = 10;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header__scrol');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('header__scrol');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('header__scrol');
    }

    lastScroll = scrollPosition();
})
