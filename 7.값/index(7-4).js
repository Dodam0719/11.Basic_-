let variable; // 선언
const initValue = null; // null을 지정

console.log(variable); // undefined. 정의되지 않은 상태
console.log(initValue); // null. 비어있는 상태

variable = "string value"; // 할당

const initValue = "초기화된 변수"; // 선언과 동시에 할당

console.log(!undefined); // true
console.log(!!undefined); // false

console.log(!null); // true
console.log(!!null); // false

console.log(!undefined === !null); // true
console.log(!!undefined === !!null); // true
console.log(undefined === null); // false

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
