//화살표 함수는 function이라는 키워드가 빠짐
//중괄호안에 멀티라인이 아니라면 간단히 한줄로도 표현가능
//화살표함수에서는 기존의 자바스크립트 함수가 가지고 있는것들이 많이 배제
//그 중 하나가 argument이고, 내부적으로 this의 동작도 다름
//화살표 함수는 가볍고, 동작방식이 많이 다르다는 걸 염두하고 사용
const arrowFunc = () => "문자열";
console.log(arrowFunc());

//일반 함수 선언
//일반 함수내에서의 this는 무조건 전역객체를 바라봄
function name() {
  return "문자열";
}
console.log(name());
