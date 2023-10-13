const str = "ABC";
console.log(str.toLowerCase()); // abc

console.log(str.charAt()); // A
console.log(str.charAt(0)); // A
console.log(str.charAt(1)); // B
console.log(str.charAt(2)); // C

console.log(str[2]); // C

// 공백 제거
const str1 = "   ABC       ";
console.log(str1.trim()); // ABC

// 글자 포함 여부
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";
console.log(paragraph.includes(searchTerm)); // true
console.log(paragraph.indexOf(searchTerm)); // 40
console.log(paragraph[40]); // d
console.log(paragraph[41]); // o
console.log(paragraph[42]); // g

const search = "cat";
console.log(paragraph.indexOf(search)); // -1
