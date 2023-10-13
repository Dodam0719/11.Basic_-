/**
 * Bigint
 *
 * 안정적인 범위의 정수
 */

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// Number.MAX_VALUE는 JavaScript에서 표현할 수 있는 가장 큰 숫자
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// Number.MAX_VALUE는 JavaScript에서 표현할 수 있는 안전한 가장 큰 숫자

// Bigint는 JavaScript에서 다루기 어려울 정도로 큰 숫자를 다룰 수 있음
console.log(123123123123123123123123); // 1.2312312312312e+23
console.log(123123123123123123123123n); // 123123123123123123123123n
console.log(BigInt(123123123123123123123123)); // 123123123123123117883392n
