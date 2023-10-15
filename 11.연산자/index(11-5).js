// instanceof
// 객체의 인스턴스가 어떤 생성자로 생성된 것인지
// {} instanceof Object

const obj = {};
const arr = [];
const func = function () {};

console.log(obj instanceof Object); // true
console.log(arr instanceof Array); // true
console.log(func instanceof Function); // true

console.log(undefined instanceof Object); // false
console.log(null instanceof Object); // false. null=>원시값
//null은 원시값이라는게 증명됨
//instanceof로 래퍼런스를 비교할 수 있고,
//프리미타입 밸류로 객체같은 래퍼런스 밸류를 비교해낼 수 있다.

//그리고 자바스크립트에서 Object 프로토타입 체인안에 많은 것들이 있기 때문에,
//이러한 래퍼런스 타입에서 최상위인 Object로 비교를 하면 true가 나옴
//수많은 객체들이 프로토타입 체인을 타고 최상위 객체로 Object를 가지고 있기 때문
console.log(obj instanceof Object);
console.log(arr instanceof Object);
console.log(func instanceof Object);
console.log(new Date() instanceof Object);
