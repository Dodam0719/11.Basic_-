console.log(String(123)); // 123
console.log(String(undefined)); // undefined
console.log(String(null)); // null
console.log(String({})); // [object Object]
console.log(String({ name: "jang" })); // [object Object]
console.log(String([1, 2, 3])); // 1,2,3

// JSON.stringify는 원시값을 변환할 때 사용
console.log(JSON.stringify({ name: "jang" })); // {"name":"jang"}
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]
