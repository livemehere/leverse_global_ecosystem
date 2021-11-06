let isMenuOpen = false;

$(".drop-btn").click(function () {
  isMenuOpen = !isMenuOpen;
  $(".drop-box").slideToggle({
    duration: 100,
  });
  if (isMenuOpen == false) {
    $(".drop-btn img").css("transform", "rotate(180deg)");
  } else {
    $(".drop-btn img").css("transform", "rotate(0deg)");
  }
});

$(".modal-btn").click(function () {
  $(".mymodal").hide();
});

$(".continue-btn").click(function () {
  window.location.href = "./success.html";
});
