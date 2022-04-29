const ham = document.querySelector('.hamburger')
// console.log(ham);
ham.addEventListener('click', x =>{
if (ham.classList.contains('fa-bars')) {
 ham.classList.replace("fa-bars", 'fa-xmark')
 document.querySelector('.hamburgerMenu').style.display = 'block';
}
else{
 document.querySelector('.hamburgerMenu').style.display = 'none';
  ham.classList.replace('fa-xmark', "fa-bars")
}
})
