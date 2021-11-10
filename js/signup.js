$(".step1-btn").click(function (e) {
  e.preventDefault();

  $(".wrap").css("transform", "translateX(-100vw)");
});

$(".step2-btn").click(function (e) {
  e.preventDefault();
  $(".wrap").css("transform", "translateX(-200vw)");
});

$(".send-btn").click(function (e) {
  e.preventDefault();
});

$(".verify-phone-btn").click(function (e) {
  $(".verify-status").html("인증완료");
});

$(".step3-btn").click(function (e) {
  e.preventDefault();
  window.location.href = "./login.html";
});

$(".country-select").on("input", (e) => {
  let flagUrl = $("option:selected").data("flag");
  // console.log($("option:selected").data("flag"));
  $(".ct-flag").attr("src", flagUrl);
});
