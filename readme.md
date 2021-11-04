> 새로운 html 파일 작성시, base.html을 복사하여 부분부분 수정하여 사용할 것

# Usage

## login.js

```js
$(".login-btn").click(function (e) {
  e.preventDefault();
  //   여기에 ajax로 로그인 요청 작업 하시면 됩니다

  window.location.href = "/html/main.html"; // 백엔드에서 routing 처리할 시 삭제해주세요
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
