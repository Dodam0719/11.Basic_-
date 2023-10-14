/**
 * # 배열 순회
 */

const arr = [1, 2, 3];

console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
// index만 겹치지 않기 때문에, 자동화를 해주면 순회가능

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, 2, 3
}

// if문일 경우 아래처럼...
let i = 0;
if (i < arr.length) {
  console.log(arr[i]);
  i++;
}

let j = 0;

while (j < arr.length) {
  console.log(arr[j]); // 1, 2, 3

  j = j + 1;
}

// for...of문 (객체를 반복할 떄 사용하나, 배열도 객체에 속하므로 가능하나, 가급적 사용 지양)
for (const value of arr) {
  console.log(value); // 1, 2, 3
}
// for...in문 (객체를 반복할 떄 사용하나, 배열도 객체에 속하므로 가능하나, 가급적 사용 지양)
for (const index in arr) {
  console.log(arr[index]); // 1, 2, 3
}
