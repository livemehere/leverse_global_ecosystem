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

$(".loading").css("display", "flex"); // 로딩바 보이기
setTimeout(function () {
  $(".loading").css("display", "none"); // 로딩바 숨기기
}, 500);
