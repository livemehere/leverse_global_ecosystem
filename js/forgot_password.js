$(".continue1-btn").click(function (e) {
  e.preventDefault();
  $(".wrap").css("transform", "translateX(-100vw)");
});

$(".continue2-btn").click(function (e) {
  e.preventDefault();
  $(".wrap").css("transform", "translateX(-200vw)");
});

$(".back3-btn").click(function (e) {
  e.preventDefault();
  $(".wrap").css("transform", "translateX(-100vw)");
});

$(".back2-btn").click(function (e) {
  e.preventDefault();
  $(".wrap").css("transform", "translateX(0vw)");
});
$(".forgot-done-btn").click(function (e) {
  e.preventDefault();
  window.location.href = "./login.html";
});

// password 보이는 여부 버튼

$(".new-password").click(function () {
  var x = document.querySelector(".new-pwd-input");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});

// password 보이는 여부 버튼

$(".toggle1").click(function () {
  var x = document.querySelector(".pw1");
  if (x.type === "password") {
    $(".toggle1 path").attr("fill", "#b9b9b95e");
    x.type = "text";
  } else {
    x.type = "password";
    $(".toggle1 path").attr("fill", "#B9B9B9");
  }
});

$(".toggle2").click(function () {
  var x = document.querySelector(".pw2");
  if (x.type === "password") {
    $(".toggle2 path").attr("fill", "#b9b9b95e");
    x.type = "text";
  } else {
    x.type = "password";
    $(".toggle2 path").attr("fill", "#B9B9B9");
  }
});
