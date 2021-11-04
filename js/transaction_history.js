// 여기에 ajax 요청을 하고 transactionData 처럼 사용해주세요
// transaction History 생성 부분
// 적절한 key값으로 변경해주세요

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
];

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

$(".filter-btn").click(function () {
  $(".wrap").css("transform", "translateX(-100vw)");
});

$(".apply-btn").click(function () {
  $(".wrap").css("transform", "translateX(0)");
});
