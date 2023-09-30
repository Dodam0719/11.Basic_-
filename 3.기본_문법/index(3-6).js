// && 연산자
var a1 = true && true; // t && t는 true 반환
var a2 = true && false; // t && f는 false 반환
var a3 = false && true; // f && t는 false 반환
var a4 = false && 3 == 4; // f && f는 false 반환
var a5 = "Cat" && "Dog"; // t && t는 Dog 반환
var a6 = false && "Cat"; // f && t는 false 반환
var a7 = "Cat" && false; // t && f는 false 반환

console.log(a1); // true
console.log(a2); // false
console.log(a3); // false
console.log(a4); // false
console.log(a5); // Dog
console.log(a6); // false
console.log(a7); // false
