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

$(".drop-item").click(function (e) {
  console.log(e.target.innerHTML);
  let routeTarget = e.target.innerHTML;

  if (routeTarget == "Development") {
    window.location.href = "./development.html";
  }
  if (routeTarget == "CLT Exchange") {
    window.location.href = "./CLT-exchange.html";
  }
  if (routeTarget == "VAP Exchange") {
    window.location.href = "./CLT-exchange.html";
  }
  if (routeTarget == "Termination") {
    window.location.href = "./termination.html";
  }
  if (routeTarget == "logout") {
    window.location.href = "./login.html";
  }
  if (routeTarget == "main") {
    window.location.href = "./main.html";
  }
});

// document.querySelector(".select-money")
document.querySelector(".select-money").addEventListener("click", function (e) {
  console.log(e.target.dataset.money);
  let selectedMoney = e.target.dataset.money;
  $(".number-input").val(selectedMoney);
});
