 //Sticky Nav for the About Sections
$(document).ready(function() {
  var stickyNavTop = $('#left_home').offset().top;
  var stickyNavBottom = $('#blog').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) { 
      $('#left_home').addClass('sticky');
    } else {
      $('#left_home').removeClass('sticky'); 
    } 

    if (scrollTop > stickyNavBottom) { 
      $('#left_home').removeClass('sticky');
    } 
  };
  $(window).scroll(function() {
    stickyNav();
  });
});

(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

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
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();
