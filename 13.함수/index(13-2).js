//함수 선언문
//함수를 중복으로 선언할 수 있는데, 그러면 마지막에 선언된 함수가 호출
function func(param1, param2) {
  return param1 + param2;
}
func() {
  return 'param1 + param2';
}
//값을 인자로 넘겨도 두번째로 선언된 함수의 문자열이 호출 됨
console.log(func(1, 2));

//함수의 순서를 바꾸면 마지막에 선언된 합산하는 함수의 결과가 호출
function func() {
  return 'param1 + param2';
}
function func(param1, param2) {
  return param1 + param2;
}
console.log(func(1, 2));

//함수선언문보다 조금 더 안전하게 할 수 있는 방법은 함수 표현식
//만든 함수를 변수에 할당하는 것(아래는 기명 함수 표현식)
//중복선언이랑 호이스팅의 문제를 const에 맡길 수 있어서
//중복으로 만들 수 없고, 중복으로 호출하는 것의 문제도 덜 수 있음
//(여기서는 위의 함수선언이 없어야 제대로 결과 호출됨)
const func = function func() {
  return 'func';
}
console.log(func());

//아래는 익명 함수 표현식
const func = function() {
  return 'func';
}
//익명함수표현식을 사용하면 간단하게 함수를 선언해서 변수에 할당해서 사용
//중복선언이나 호이스팅 문제를 한층 덜어줄 수 있음
//모든함수는 함수표현식으로 만든다는 규칙을 정하는 팀도 있고,
//그런 방법을 지양하는 사람들도 늘고 있는 추세