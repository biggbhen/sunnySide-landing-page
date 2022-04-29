const ham = document.querySelector('.hamburger')
// console.log(ham);
ham.addEventListener('click', (x) =>{
 ham.classList.replace("fa-bars", 'fa-xmark')
document.querySelector('.hamburgerMenu').style.display='block'
console.log(x.target);

})