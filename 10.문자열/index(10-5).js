//문자열과 배열

// .split('')을 사용하면 손쉽게 문자열을 배열로 바꿀 수 있음
console.log("HELLO WORLD".split("")); // [ 'H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D' ]
// ,콤마를 기준으로 배열이 나뉨
console.log("HELLO,WORLD".split(",")); // [ 'HELLO', 'WORLD' ]
console.log("HE,LLO,WO,RLD".split(",")); // [ 'HE', 'LLO', 'WO', 'RLD' ]

// 나뉜 배열을 다시 문자열로 합칠때는 join('')사용
console.log(["HE", "LLO", "WO", "RLD"].join("")); // 'HELLOWORLD'
// ,콤마를 사용하면 ,콤마를 기준으로 합쳐짐
console.log(["HE", "LLO", "WO", "RLD"].join(","));

const helloWorld = "HELLO WORLD";
// ...이라는 전개연산자를 []배열표시와 함께 사용하면 배열로 풀어서 보여줌
console.log([...helloWorld]); // [ 'H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D' ]
// length 속성 사용하면 문자열의 길이를 알 수 있음
// 둘의 타입이 다른데도, length속성을 동일하게 사용할 수 있음
// Array(Reference, Object) 타입
console.log(helloWorld.length); // 11
// 문자열은 primitive 원시타입
console.log(["1", 2, 3].length); // 3
