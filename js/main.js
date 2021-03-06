// 여기에 ajax 요청을 하고 cardData 처럼 사용해주세요
//  Wallet 카드 생성 부분
let cardData = [
  {
    wallet: "CLT wallet",
    money: "$12,000",
    cardNum1: 1234,
    cardNum2: 4567,
    cardNum3: 9013,
  },
  {
    wallet: "CLT wallet",
    money: "$36,000",
    cardNum1: 1234,
    cardNum2: 4567,
    cardNum3: 9013,
  },
  {
    wallet: "CLT wallet",
    money: "$88,000",
    cardNum1: 1234,
    cardNum2: 4567,
    cardNum3: 9013,
  },
];

cardData.forEach((card) => {
  let cardComponent = `
  <div class="card-wrap swiper-slide">
    <div class="credit-card registerd-card">
      <h2>${card.wallet}</h2>
      <h1>${card.money}</h1>
      <div class=d-flex>
          <div class="mx-2">
              <h3 class="text-center">CDS</h3>
              <p class="card-number">${card.cardNum1}</p>
          </div>
          <div class="mx-2">
              <h3 class="text-center">CDA</h3>
              <p class="card-number">${card.cardNum1}</p>
          </div>
          <div class="mx-2">
              <h3 class="text-center">VAP</h3>
              <p class="card-number">${card.cardNum1}</p>
          </div>
      </div>
  </div>
</div>
  `;

  $(".cards-box").append(cardComponent);
});

// 여기에 ajax 요청을 하고 transactionData 처럼 사용해주세요
// transaction 생성 부분
let transactionData = [
  {
    title: "Receive money",
    from: "Harry James",
    money: "+ $1,000",
    date: "09/10",
  },
  {
    title: "Receive money",
    from: "Harry James",
    money: "+ $3,000",
    date: "09/10",
  },
  {
    title: "Receive money",
    from: "Harry James",
    money: "+ $900",
    date: "09/10",
  },
  {
    title: "Receive money",
    from: "Harry James",
    money: "+ $900",
    date: "09/10",
  },
  {
    title: "Receive money",
    from: "Harry James",
    money: "+ $900",
    date: "09/10",
  },
  {
    title: "Receive money",
    from: "Harry James",
    money: "+ $900",
    date: "09/10",
  },
  {
    title: "Receive money",
    from: "Harry James",
    money: "+ $900",
    date: "09/10",
  },
  {
    title: "Receive money",
    from: "Harry James",
    money: "+ $900",
    date: "09/10",
  },
];

transactionData.forEach((transaction) => {
  let transactionComponent = `
  <div class="transaction ms-3 me-3 mt-2">
    <div class="transaction-content">
        <h1>${transaction.title}</h1>
        <h2>${transaction.from}</h2>
    </div>
    <div class="transaction-number">
        <h1>${transaction.money}</h1>
        <h2>${transaction.date}</h2>
    </div>
  </div>
  `;

  $(".transaction-list").append(transactionComponent);
});

// 불러온 transactionData 가 없을때, 없는 알림창 뜨게하기
if (transactionData.length == 0) {
  $(".no-transaction-notice").css("display", "flex");
} else {
  $(".no-transaction-notice").css("display", "none");
}

// UI 디자인 때문에 추가한 박스(건들지 말아주세요)
const sizeBoxComponent = `
<div class="transaction-number empty-box">
  <div style="height: 200px;"></div>
</div>
`;
$(".transaction-list").append(sizeBoxComponent);

// transaction 부분 끝-----

//  swiper (최하단에 위치하게 해야 동작합니다)
var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 2,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// 사용자 프로필
// 사용자 로그인정보에서 이름 가져와서 userName에 넣으시면 됩니다.

let userName = "Choi";

$(".user-name").html(`HI, ${userName} !`);

// 메뉴바
let isSidebarOpen = false;
$(".setting-btn").click(function () {
  $(".side-bar").css("transform", "translateX(0vw)");
  $(".view").css("transform", "translateX(60vw)");
  // $(".view").css("overflow", "hidden");
  // $(".view").css("overflow-y", "hidden");
  isSidebarOpen = true;
});

//  사이드 메뉴바가 닫기는 방식은 2가지입니다.
//  1. 슬라이드를 왼쪽으로하거나
//  2. 사이드바의 우측하단에 위치한 닫기 버튼을 누르시면 됩니다.

// const sideBarViewPort = document.querySelector(".when-sidebar-open");
// let mc = new Hammer(sideBarViewPort);
// mc.on("panleft panright tap press", (ev) => {
//   if (isSidebarOpen == true && ev.deltaX < -150) {
//     $(".side-bar").css("transform", "translateX(-60vw)");
//     $(".view").css("transform", "translateX(0vw)");
//     $(".view").css("overflow-y", "hidden");
//     isSidebarOpen = false;
//   }
// });

//  닫는 버튼 추가 하였습니다
$(".menu-btn-close").click(function () {
  $(".side-bar").css("transform", "translateX(-60vw)");
  $(".view").css("transform", "translateX(0vw)");
  // $(".view").css("overflow", "auto");
});

// $(window).on("scroll", () => {
//   if ((isSidebarOpen = false)) {
//     $(".view").css("overflow", "auto");
//   }
// });

$(".menu-btn").click(function () {
  $(this).addClass("menu-btn-active");
  $(this).siblings().removeClass("menu-btn-active");
});

$(".menu-btn").click(function (e) {
  let routeTarget = $(e.currentTarget).data("route");

  if (routeTarget == "recharge") {
    window.location.href = "./recharge.html";
  }
  if (routeTarget == "account") {
    window.location.href = "./account.html";
  }
  if (routeTarget == "exchange") {
    window.location.href = "./CLT-exchange.html";
  }
  if (routeTarget == "history") {
    window.location.href = "./transaction_history.html";
  }
  if (routeTarget == "logout") {
    window.location.href = "./login.html";
  }
  if (routeTarget == "main") {
    window.location.href = "./main.html";
  }
});

$(".loading").css("display", "flex"); // 로딩바 보이기
setTimeout(function () {
  $(".loading").css("display", "none"); // 로딩바 숨기기
}, 500);
