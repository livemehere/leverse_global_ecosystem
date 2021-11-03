$(".begin-btn").click(function () {
  $(".wrap").css("transform", "translateX(-100vw)");
});

//  swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
