//문자열로 변환

console.log(String(123)); // 123
console.log(String(undefined)); // undefined
console.log(String(null)); // null
console.log(String({})); // [object Object]
console.log(String({ name: "jang" })); // [object Object]
console.log(String([1, 2, 3])); // 1,2,3

//JSON.stringify을 사용하면, 문자열로 바로 찍는듯한 현상을 보여줌
//단, JSON.stringify는 원시값을 변환할때만 씀
console.log(JSON.stringify({ name: "jang" })); // {"name":"jang"}
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]
//그러나 문자열로 변환하는 건 string으로 충분하다.
