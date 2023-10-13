// instanceof
// 객체의 인스턴스가 어떤 생성자로 생성된 것인지
// {} instanceof Object

const obj = {};
const arr = [];
const func = function () {};

console.log(obj instanceof Object); // true
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(func instanceof Function); // true
console.log(func instanceof Object); // true

console.log(undefined instanceof Object); // false
console.log(null instanceof Object); // false. null=>원시값
