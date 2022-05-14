const hamburgerMenu = document.querySelector('.hamburgerMenu'),
  hamButton = document.querySelector('.hamburger'),
  menuIcon = document.querySelector('.menu-icon'),
  closeIcon = document.querySelector('.close-icon');
function showHamburger() {
  hamburgerMenu.classList.remove('showMenu');
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
  hamburgerMenu.style.transform = 'translateX(150%)';
}
function closeHamburger() {
  hamburgerMenu.classList.add('showMenu');
  closeIcon.style.display = 'block';
  menuIcon.style.display = 'none';
  hamburgerMenu.style.transform = 'translateX(0%)';
}
hamButton.addEventListener('click', (x) => {
  if (hamburgerMenu.classList.contains('showMenu')) {
    showHamburger();
  } else {
    closeHamburger();
  }

  x.preventDefault();
});
