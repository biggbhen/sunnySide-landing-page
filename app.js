const ham = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
// console.log(ham);
ham.addEventListener('click', (x) => {
  if (ham.classList.contains('fa-bars')) {
    ham.classList.replace('fa-bars', 'fa-xmark');
    hamburgerMenu.style.display = 'block';
    hamburgerMenu.style.transition = 'all 0.3s ease-in-out';
  } else {
    hamburgerMenu.style.display = 'none';
    ham.classList.replace('fa-xmark', 'fa-bars');
  }
});
