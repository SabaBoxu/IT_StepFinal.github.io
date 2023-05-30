
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect:'Fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});

const swiper1 = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

hamburger = document.querySelector(".hamburger")
        hamburger.onclick=function(){
              navbar=document.querySelector(".nav-bar")
              navbar.classList.toggle("active")
        }




        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

      if (loggedInUser) {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.textContent =' Welcome, ${loggedInUser.userName}!';
      } else {
        window.location.href = 'login.html';
      }

      function logout() {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html';
      }

