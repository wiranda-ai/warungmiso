// toogle class aktif 
const navbarNav = document.querySelector('.navbar-nav');
// ketika miso di kelik
document.querySelector('#miso-menu').onclick =() =>{
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan  nav
const miso = document.querySelector('#miso-menu');

document.addEventListener('click', function(e) {
    if(!miso.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
    }
});