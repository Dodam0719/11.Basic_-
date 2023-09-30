const un = undefined;
const nu = null;
const bool = false;
const num1 = 0;
const str = "문자열";
// 원시 값이 아닌 데이터 타입은 즉...! 레퍼런스, 객체 타입!

/*
 * 동등 연산자를 사용할 때
 * 엄격한 비교 => ===
 * 느슨한 비교 => ==
 */

if (num1 == 0) {
  console.log("num은 0입니다"); // num은 0입니다.
}

// 좌항에는 문자열의 '0' == 우항에는 숫자의 0
const num2 = "0";
if (num2 === 0) {
  console.log("num은 0입니다");
} else {
  console.log("num은 0이 아닙니다."); // num은 0이 아닙니다.
}
