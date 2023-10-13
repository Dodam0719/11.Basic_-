/**
 * Not A Number => 숫자가 아니다
 * - NaN
 * - Number.isNaN()
 */

console.log(Number(undefined)); // NaN
console.log(parseInt("숫자로 변환 불가능한 문자열")); // NaN
console.log(Math.log(-1)); // NaN
console.log(10 + NaN); // NaN

console.log("문자열" + 10); // 문자열10
// 문자열 + 숫자 => + 연산자일 경우 문자열 + 숫자는, 숫자가 문자열로 변환이 됨
// 그러나 + 가 아닌 연산자는 문자열로 병합이 되지 않음
console.log("가나다라" / 10); // NaN
