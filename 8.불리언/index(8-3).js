/**
 * == vs === (비교 연산자)
 * equality
 *
 * == -> 느슨한 비교
 * === -> 엄격한 비교
 */

console.log("1" == 1); // true
console.log("1" === 1); // false

console.log(0 == []); // true
console.log(0 == ""); // true
console.log("" == []); // true

console.log(0 === []); // false
console.log(0 === ""); // false
console.log("" === []); // false

console.log(Number("0") === 0); // true
