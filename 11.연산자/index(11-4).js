// typeof
// primitive => string, number, bigint, boolean, undefined, symbol, null

const str = "string";
const func = function () {};

//primitive를 구분할때 typeof 연산자 사용
console.log(typeof str); // string
console.log(typeof 123); // number
console.log(typeof 1n); // bigint
console.log(typeof true); // boolean
console.log(typeof Symbol()); // symbol
console.log(typeof undefined); // undefined
console.log(typeof func); // function
//래퍼런스 객체인 아래의 3개는 전부 객체로 나오기 떄문에, 다른걸로 비교하는게 좋음
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
//null이 객체로 나오는건, JS 초기 설계오류라고 봐도 됨
//고치자는 얘기가 나왔는데, 많은 현대 웹 애플리케이션들이
//typeof null을 객체로 포함해서 나간 코드가 많아서 추가 수정을 하지 않은 것잉라고 함

//래퍼런스 객체로 만든것도 객체로 나옴
console.log(typeof new Boolean(true)); // object
