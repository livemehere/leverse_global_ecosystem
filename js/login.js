$(".login-btn").click(function (e) {
  e.preventDefault();
  //   여기에 ajax로 로그인 요청 작업 하시면 됩니다

  window.location.href = "/html/main.html"; // 백엔드에서 routing 처리할 시 삭제해주세요
});
