/**
 *
 * Infinity
 * 너무 크거나 작다
 * 지수 1023까지만 허용
 */

console.log(Math.pow(2, 1023)); // 8.98846567431158e+307
console.log(Math.pow(2, 1024)); // Infinity
console.log(7 / 0); // Infinity

const result = isFinite(Math.pow(2, 1024));
console.log(result); // false

// isFinite는 값이 NaN, Infinity가 아닌 실제 숫자인지 확인
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(19)); // true
