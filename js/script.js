const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});




const upArrow = document.querySelector('.up-arrow');

window.onscroll = () => {
  if (window.scrollY > 100) {
    upArrow.classList.remove('hidden');
  } else {
    upArrow.classList.add('hidden');
  }
};