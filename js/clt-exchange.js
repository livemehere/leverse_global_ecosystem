$(".modal-btn").click(function () {
  $(".mymodal").hide();
});

$(".loading").css("display", "flex"); // 로딩바 보이기
setTimeout(function () {
  $(".loading").css("display", "none"); // 로딩바 숨기기
}, 500);
