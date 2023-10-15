//문자열에 접근

//문자열을 다룰때, 표준내장객체들을 MDN에서 가져다 쓰면 됨
const str = "ABC";
console.log(str.toLowerCase()); // abc

console.log(str.charAt()); // A
console.log(str.charAt(0)); // A
console.log(str.charAt(1)); // B
console.log(str.charAt(2)); // C
//배열접근방법으로도 가져올 수 있음
console.log(str[2]); // C

// 공백 제거
const str1 = "   ABC       ";
console.log(str1.trim()); // ABC

// 글자 포함 여부
//문자열을 자르고 붙일 수도 있고, 위치도 알 수 있음
//아래는 문자열에 포함이 되었는지도 찾을 수 있음
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";
console.log(paragraph.includes(searchTerm)); // true

//indexOf를 사용하면 해당 인덱스를 알 수가 있음
//dog가 40번쨰에 있다고 알려줌
console.log(paragraph.indexOf(searchTerm)); // 40
console.log(paragraph[40]); // d
console.log(paragraph[41]); // o
console.log(paragraph[42]); // g

//cat은 없어서 -1
const search = "cat";
console.log(paragraph.indexOf(search)); // -1
