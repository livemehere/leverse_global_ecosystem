> 새로운 html 파일 작성시, base.html을 복사하여 부분부분 수정하여 사용할 것

# Usage

## login.js

```js
$(".login-btn").click(function (e) {
  e.preventDefault();
  //   여기에 ajax로 로그인 요청 작업 하시면 됩니다

  // window.location.href = "/html/main.html"; // 백엔드에서 routing 처리할 시 삭제해주세요
});
```

## main.js

### card 데이터 불러와서 추가하는부분

- ajax 요청으로 받아온 데이터를 cardData 라고 가정했을 때의 사용법입니다
- 임시 데이터들의 key 값들을 적절히 변경해주세요

```js
let cardData = [
  {
    wallet: "USD wallet",
    money: "$12,000",
    cardNum1: 1234,
    cardNum2: 4567,
    cardNum3: 9013,
    cardNum4: 3274,
  },
  {
    wallet: "USD wallet",
    money: "$36,000",
    cardNum1: 1234,
    cardNum2: 4567,
    cardNum3: 9013,
    cardNum4: 3274,
  },
  {
    wallet: "USD wallet",
    money: "$88,000",
    cardNum1: 1234,
    cardNum2: 4567,
    cardNum3: 9013,
    cardNum4: 3274,
  },
];

cardData.forEach((card) => {
  let cardComponent = `
  <div class="card-wrap swiper-slide">
    <div class="credit-card registerd-card">
        <h2>${card.wallet}</h2>
        <h1>${card.money}</h1>
        <h3>Creat wallet</h3>
        <div>
            <span>${card.cardNum1}</span>
            <span>${card.cardNum2}</span>
            <span>${card.cardNum3}</span>
            <span>${card.cardNum4}</span>
        </div>
    </div>
  </div>
  `;

  $(".cards-box").append(cardComponent);
});
```

### transaction 생성 부분

```js
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
    money: "+ $900",
    date: "09/10",
  },
];

transactionData.forEach((transaction) => {
  let transactionComponent = `
  <div class="transaction ms-3 me-3 mb-4">
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
```

## transaction history.js

- transaction 과 동일하게 사용하되 데이터의 key값을 적절히 변경해주세요

```js
transactionData.forEach((transaction) => {
  let transactionComponent = `
    <div class="card">
        <div class="rowwrap">
            <div class="design"></div>
            <div class="row-wrap">
                <p>${transaction.title}</p>
                <p>${transaction.money}</p>
            </div>
            <div class="row-wrap">
                <p class="detail">Cash in transit</p>
                <p class="detail">${transaction.from}</p>
            </div>
        </div>
    </div>
    `;

  $(".card-box").append(transactionComponent);
});
```

---

# 완성 후 피드백 적용 사항

### main.js 의 사이드바 메뉴

```js
// 메뉴바
let isSidebarOpen = false;
$(".setting-btn").click(function () {
  $(".side-bar").css("transform", "translateX(0vw)");
  $(".view").css("transform", "translateX(60vw)");
  isSidebarOpen = true;
});

//  사이드 메뉴바가 닫기는 방식은 2가지입니다.
//  1. 슬라이드를 왼쪽으로하거나
//  2. 사이드바의 우측하단에 위치한 닫기 버튼을 누르시면 됩니다.
const sideBarViewPort = document.querySelector(".when-sidebar-open");
let mc = new Hammer(sideBarViewPort);
mc.on("panleft panright tap press", (ev) => {
  if (isSidebarOpen == true && ev.deltaX < -150) {
    $(".side-bar").css("transform", "translateX(-60vw)");
    $(".view").css("transform", "translateX(0vw)");
    $(".view").css("overflow", "hidden");
    isSidebarOpen = false;
  }
});

//  닫는 버튼 추가 하였습니다
$(".sidebar-close-btn").click(function () {
  $(".side-bar").css("transform", "translateX(-60vw)");
  $(".view").css("transform", "translateX(0vw)");
});
```

### main.html 하단 아이콘 변경

- 적절한 아이콘으로 변경하였습니다
- functions 박스에있는 Recharge 아이콘도 변경
- 사이드바 메뉴에서도 아이콘 변경사항 적용

## 배경수정

> 어떤아이콘은 정상적으로 보이는반면, 간혹 어떤아이콘은 img 태그로 동작하지 않는 버그가 발생하여, 해당 부분들만 svg태그로 변경하였습니다

- index.html 에 배경을 요구사항에 맞게 변경
- login.html 하단의 웨이브 배경도 요구사항에 맞게 변경

## 텍스트 변경

- index.html 텍스트 변경

## main.html default 아이콘 변경

- 좌측상단 사용자의 프로필 사진 default를 적절히 변경

## 로딩바

```js
$(".loading").css("display", "flex"); // 로딩바 보이기
setTimeout(function () {
  $(".loading").css("display", "none"); // 로딩바 숨기기
}, 1000);
```

- 위 코드는 로딩바를 처리하는 예시입니다. 로딩은 하나의 <div>요소입니다. display를 조작해주시면 됩니다.
- ajax 요청의 말단에 display를 none으로 변경해주시면 됩니다.
- dom 요소를 조작하여, 동적으로 데이터를 입력하는 페이지에만 로딩바가 들어가있습니다.(더 필요하신페이지에는 <div class="loading"><div/>태그를 screen태그의 최상단에 위치시키고, css를 해당 html에 적용되도록 추가해주시면됩니다.)

# 참고사항

- 회원가입시 국가코드 (국기 사용하시려면, 외부 API사용 하셔야합니다)
