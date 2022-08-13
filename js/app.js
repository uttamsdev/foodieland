var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
});


const faBars = document.querySelector('.fa-bars');
const navItems = document.querySelector('.nav-items');
faBars.addEventListener('click',()=>{
  navItems.classList.toggle("active");
})