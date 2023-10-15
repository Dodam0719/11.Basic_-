const resetButton = document.querySelector(".reset");

// 이벤트 추가
resetButton.addEventListener("click", function (event) {
  console.dir(event);
});

// 이벤트 제거
resetButton.removeEventListener("click", function (event) {
  console.dir(event);
});

//
const onReset = function (event) {
  console.log(event.target);
};

resetButton.addEventListener("click", onReset);
