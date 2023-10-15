/**
 * Not A Number => 숫자가 아니다
 * - NaN
 * - Number.isNaN()
 */

//문자열로 형변환을 시도한 undefined는 숫자로 변환될 수 없어서 NaN
console.log(Number(undefined)); // NaN
//parseInt는 정수로 값을 변환해주는 메서드인데, 문자열이므로 NaN
console.log(parseInt("숫자로 변환 불가능한 문자열")); // NaN
//Math.log에서는 -값을 넣으면 숫자로 변환될 수 없어서 NaN
console.log(Math.log(-1)); // NaN
// 10+NaN은 NaN을 더했으니 당연히 NaN
console.log(10 + NaN); // NaN

console.log("문자열" + 10); // 문자열10
// 문자열 + 숫자 => + 연산자일 경우 문자열 + 숫자는, 숫자가 문자열로 변환이 됨
// 그러나 + 가 아닌 연산자는 문자열로 병합이 되지 않음
//문자열과 숫자로 연산(+)할때는 문자열 연산이 되지만, /는 문자열로 병합이 되지 않기 떄문에 NaN
console.log("가나다라" / 10); // NaN
