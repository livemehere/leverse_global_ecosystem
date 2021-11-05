$(".continue1-btn").click(function (e) {
  e.preventDefault();
  $(".wrap").css("transform", "translateX(-100vw)");
});

$(".continue2-btn").click(function (e) {
  e.preventDefault();
  $(".wrap").css("transform", "translateX(-200vw)");
});

$(".forgot-done-btn").click(function (e) {
  e.preventDefault();
  window.location.href = "/html/login.html";
});

$(".back3-btn").click(function (e) {
  e.preventDefault();
  $(".wrap").css("transform", "translateX(-100vw)");
});

$(".back2-btn").click(function (e) {
  e.preventDefault();
  $(".wrap").css("transform", "translateX(0vw)");
});
$(".forgot-done-btn").submit(function (e) {
  e.preventDefault();
  window.location.href = "./login.html";
});
