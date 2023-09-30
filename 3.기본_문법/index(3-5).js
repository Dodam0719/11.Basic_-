const word = "문자1";
const word2 = "문자2";
const word3 = `문자3`;

console.log(word[0]); // 문
console.log(word[1]); // 자
console.log(word[2]); // 1
console.log(word[3]); // undefined
console.log(word.length); // 2

// 문자 연산
const words = word + " " + word2;
console.log(words); // 문자1 문자2
