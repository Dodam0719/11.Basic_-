console.log("HELLO WORLD".split("")); // [ 'H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D' ]
console.log("HELLO,WORLD".split(",")); // [ 'HELLO', 'WORLD' ]
console.log("HE,LLO,WO,RLD".split(",")); // [ 'HE', 'LLO', 'WO', 'RLD' ]

console.log(["HE", "LLO", "WO", "RLD"].join("")); // 'HELLOWORLD'

const helloWorld = "HELLO WORLD";
console.log([...helloWorld]); // [ 'H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D' ]
console.log(helloWorld.length); // 11
console.log(["1", 2, 3].length); // 3
