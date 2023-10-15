/**
 * # 배열 순회
 */

const arr = [1, 2, 3];

//배열에 접근하는데 아래와 같은 식이면 피곤
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
// index만 겹치지 않기 때문에, 자동화를 해주면 순회가능
// 반복문으로 순회해서 자동화할 수 있음(=루트를 돈다?)
// let i=0;은 초기화(카운터 변수를 초기화)
// i < arr.length는 컨디션(표현식) : 반복이 될때마다 평가할 식(참이면 실행)
// ++은 final-expression : 반복 후에 평가할 식(카운터변수 증감)
// 여기서 let 대신 var를 사용하면 전역변수가 되기 때문에, 꼭 let 사용
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, 2, 3
}

// 위의 for문을 if문으로 바꾸면 아래와 같음
let i = 0;
if (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// 위의 for문을 while문으로 바꾸면 아래와 같음
// 굳이 for문을 사용하지 않아도 될 때는, while문 사용
let j = 0;

while (j < arr.length) {
  console.log(arr[j]); // 1, 2, 3

  j = j + 1;
}

// 객체를 반복할때 사용하는 문법. for of문, for in문이라 부름
// 자바스크립트 배열은 객체나 다름없기 때문에 객체를 여는 for of문과 for in문 사용가능
// 하지만 굉장히 위험. 자바스크립트에 있는 배열만 돌려야 하는데 객체까지 돌릴 수 있어서
// 아래의 두가지는 굳이 사용할 필요 없음
// for...of문 (객체를 반복할 떄 사용하나, 배열도 객체에 속하므로 가능하나, 가급적 사용 지양)
for (const value of arr) {
  console.log(value); // 1, 2, 3
}
// for...in문 (객체를 반복할 떄 사용하나, 배열도 객체에 속하므로 가능하나, 가급적 사용 지양)
for (const index in arr) {
  console.log(arr[index]); // 1, 2, 3
}
