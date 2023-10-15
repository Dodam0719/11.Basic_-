// 함수 선언문
function func(param1, param2) {
  return param1 + param2;
}

function func() {
  return "param1 + param2";
}
console.log(func()); // param1 + param2

// 함수 순서를 바꾼다면 출력 결과가 달라짐
function func() {
  return "param1 + param2";
}

function func(param1, param2) {
  return param1 + param2;
}

console.log(func()); // NaN
console.log(func(1, 2)); // 3

// 기명 함수 표현식
const func = function func() {
  return "func";
};

// 익명 함수 표현식
const func = function () {
  return "func";
};
console.log(func()); // func
