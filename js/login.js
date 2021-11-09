$(".login-btn").click(function (e) {
  e.preventDefault();
  //   여기에 ajax로 로그인 요청 작업 하시면 됩니다

  window.location.href = "./main.html"; // 백엔드에서 routing 처리할 시 삭제해주세요
});

var a = document.querySelector('meta[name="viewport"]');
a &&
  document.body.addEventListener(
    "orientationchange",
    function () {
      a.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    },
    !1
  );

// password 보이는 여부 버튼

$(".password-toggle").click(function () {
  var x = document.querySelector(".password-input");
  if (x.type === "password") {
    x.type = "text";
    $(".password-toggle path").attr("fill", "#b9b9b95e");
  } else {
    x.type = "password";
    $(".password-toggle path").attr("fill", "#B9B9B9");
  }
});
