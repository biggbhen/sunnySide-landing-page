const ham = document.querySelector('.harmburger')
ham.addEventListener('click', x =>{
document.querySelector('.hamburgerMenu').style.display='block'
ham.style.width = '2.8125rem'
ham.setAttribute('src', src="images/cancel.png")
})