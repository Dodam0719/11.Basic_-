/**
 *
 * JS Type
 * - 원시(Primitive)
 * - 객체, 참조(Reference)
 */

const object = {};
const array = [];
function func() {}

console.log(object instanceof Object); // true
console.log(array instanceof Array); // true
console.log(func instanceof Function); // true

console.log(Object.prototype.toString.call(object)); // [object Object]
console.log(Object.prototype.toString.call(array)); // [object Array]
console.log(Object.prototype.toString.call(func)); // [object Function]

console.log(typeof array); // object
console.log(typeof func); // function
