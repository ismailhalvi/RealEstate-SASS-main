let mobile_nav = document.getElementById("mobile-nav");
let aside = document.getElementById("aside");

mobile_nav.addEventListener("click", function () {
  if (aside.style.right === "0px") {
    aside.style.right = "-250px";
  } else {
    aside.style.right = "0px";
  }
});
  document  .addEventListener("click", function (e) {
    if (e.target !== mobile_nav && e.target !== aside) {
      aside.style.right = "-250px";
    }
  });
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});