console.log(1 === 1.0); // true
// true가 되는 이유는 IEEE 부동소수점 방식을 사용하기 때문
console.log(Math.pow(2, 9999)); // Infinity
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(isNaN(1)); // false
