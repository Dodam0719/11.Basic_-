/**
 * 즉시 실행 함수 표현식
 * (IIFE, Immediately Invoked Function Expression)
 * 새로운 스코프를 생성할 수 있다.
 */
const result = 8 * 3 + 4;
console.log(result);

(function () {
  // IIFE 시작
  // IIFE 내부 동작 코드
})(); // IIFE 종료

(function () {
  //기존에 var로만 선언할 수 있는 키워드가 있을때는
  //함수에 대한 스코프를 나누기가 어려웠음
  var aName = "Barry";
  console.log(aName);
})();

//아래의 var변수는 함수스코프이기 때문에
if (true) {
  var temp = "hello";
}
//아래와 같은 문제가 생김
console.log(temp);

//방지하기 위해서 let 사용. 그럼 블럭 스코프로 분리됨
if (true) {
  let temp2 = "hello";
}
console.log(temp2);

//이러한 경우를 막기위해서 즉시실행함수를 쓰기 시작
//그러면 내부적으로는 잘 사용할 수 있음. 밖에서 접근 못함
//일종의 블럭 스코프를 흉내내는 새로운 스코프를 만들어냄
if (true) {
  var temp = "";
  (function () {
    var temp = "hello";
    console.log(temp);
  })();
}
console.log(temp);

//즉시실행함수를 사용할때는 세미콜론으로 구분을 해줘야 함(앞이든 뒤든)
//그래야 영역이 침범되지 않음. 붙어버리면 정상 실행안되고 오류 뱉음
(function () {})()(function () {})();
(function (num) {
  console.log(num);
})(1); // 여기서 값을 넘김

//무언가 숨겨야 할 데이터가 있을 떄 좋음
(function () {
  var privateData = "secret";
  console.log(privateData);
})();
console.log(privateData);
