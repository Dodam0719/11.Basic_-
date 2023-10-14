/**
 * # 배열
 *
 * 1. 객체
 * 2. index: value (딕셔너리) => index에 구멍이 생길 수 있다.
 */

// 리터럴 형태
const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
// 인스턴스 형태
const arr2 = new Array(1, 2, 3);
console.log(arr2); // [1, 2, 3]

arr[0]; // 1
arr[1]; // 2
arr[2]; // 3
arr[3] = 4;
arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]

arr[9] = 10;
console.log(arr); // [1, 2, 3, 4, 5, <4 empty items>, 10]
console.log(arr[8]); // undefined

arr.prop = [6, 7];
console.log(arr); // [1, 2, 3, 4, 5, <4 empty items>, 10, prop: [6, 7]]
