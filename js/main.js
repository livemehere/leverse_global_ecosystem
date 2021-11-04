// 여기에 ajax 요청을 하고 cardData 처럼 사용해주세요
//  Wallet 카드 생성 부분
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
