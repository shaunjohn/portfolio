 //Sticky Nav for the About Sections
$(document).ready(function() {
  var stickyOneTop    = $('#sticky_one').offset().top, 
      stickyOneBottom = $('#sticky_bottom1').offset().top,
      stickyTwoTop    = $('#sticky_two').offset().top,
      stickyTwoBottom = $('#sticky_bottom2').offset().top;
  var stickyOnes = function(){
    var windowTop = $(window).scrollTop();
    ((windowTop > stickyOneTop) && (windowTop < stickyOneBottom)) ? $('#sticky_one').addClass('sticky') : $('#sticky_one').removeClass('sticky'); 
    ((windowTop > stickyTwoTop) && (windowTop < stickyTwoBottom)) ? $('#sticky_two').addClass('sticky') : $('#sticky_two').removeClass('sticky'); 
  };
  $(window).scroll(function() {
    stickyOnes();
  });
});

function menuMover() {
  var querySelector      = document.querySelector.bind(document),
      navdrawerContainer = querySelector('.navdrawer-container'),
      body               = document.body,
      appbarElement      = querySelector('.app-bar'),
      menuBtn            = querySelector('.menu'),
      main               = querySelector('main');
  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }
  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
  }
  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function(event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
}
menuMover();
