typeof instance === "undefined";
typeof instance === "Boolean";
typeof instance === "number";
typeof instance === "string";
typeof instance === "bigint";
typeof instance === "symbol";

const un = undefined;
const nu = null;
const bool = false;
const num = 0;
const str = "문자열";
// 원시 값이 아닌 데이터 타입은 즉...! 레퍼런스, 객체 타입!

console.log(typeof un); // undefined
console.log(typeof nu); // object
console.log(typeof bool); // boolean
console.log(typeof num); // number
console.log(typeof str); // string
