;(function() {
  var navToggler = document.getElementById('navToggler'),
    mainNav = document.getElementById('mainNav'),
    pageHeader = document.querySelector('.page-header');

  navToggler.addEventListener('click', function() {
    this.classList.toggle('main-nav__toggler--close');
    mainNav.classList.toggle('main-nav__list--opened');
    mainNav.parentElement.classList.toggle('main-nav--opened');
    pageHeader.classList.toggle('page-header--bg-position');
  });
})();
