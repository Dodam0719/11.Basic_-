// || 연산자
var o1 = true || true; // t || t는 true 반환
var o2 = false || true; // f || t는 true 반환
var o3 = true || false; // t || f는 true 반환
var o4 = false || 3 == 4; // f || f는 false 반환
var o5 = "Cat" || "Dog"; // t || t는 Cat 반환
var o6 = false || "Cat"; // f || t는 Cat 반환
var o7 = "Cat" || false; // t || f는 Cat 반환

console.log(o1); // true
console.log(o2); // true
console.log(o3); // true
console.log(o4); // false
console.log(o5); // Cat
console.log(o6); // Cat
console.log(o7); // Cat
