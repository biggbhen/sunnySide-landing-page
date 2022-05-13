const hamburgerMenu = document.querySelector('.hamburgerMenu'),
  ham = document.querySelector('.hamburger'),
  removeIcon = document.querySelector('.cancel');
function showHamburger() {
  ham.style.display = 'none';
  hamburgerMenu.style.display = 'block';
  removeIcon.style.display = 'block';
}
function closeHamburger() {
  ham.style.display = 'block';
  hamburgerMenu.style.display = 'none';
  removeIcon.style.display = 'block';
}
// console.log(ham);
ham.addEventListener('click', (e) => {
  if () {
    showHamburger();
  } else {
    closeHamburger();
  }
  // console.log(ham);
});
