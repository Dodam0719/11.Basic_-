/**
 * # 배열
 *
 * 1. 객체
 * 2. index: value (딕셔너리) => index에 구멍이 생길 수 있다.
 */

// 리터럴 형태 (아래의 인스턴스로 만들기보다는, 리터럴로 간단히 만들기를 권장)
const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
// 인스턴스 형태
const arr2 = new Array(1, 2, 3);
console.log(arr2); // [1, 2, 3]

arr[0]; // 1
arr[1]; // 2
arr[2]; // 3
arr[3] = 4;
//push라는 내장메서드를 간단히 만들어진 배열에
//.으로 push메서드를 불러와서 안에 넣을수도 있음
arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]

//딕셔너리형태, 배열을 건너뛰어서 값을 넣으면 빈공간이 생김
arr[9] = 10;
console.log(arr); // [1, 2, 3, 4, 5, <4 empty items>, 10]
console.log(arr[8]); // undefined

//prop이라는 index(=숫자)는 없지만, 배열에 들어감
//자바스크립트도 객체이기 때문에 속성(prop)을 하나 더 가질 수 있는 것
//자바스크립트의 프로퍼티(속성)들은 배열의 일부부이 아니라,
//객체의 속성 일부분으로 간주된다고 생각하면 됨
arr.prop = [6, 7];
console.log(arr); // [1, 2, 3, 4, 5, <4 empty items>, 10, prop: [6, 7]]

//위의 arr.prop나 아래의 arr['prop']으로 넣어도 가능
arr["prop"] = [6, 7];
console.log(arr.prop);
console.log(arr);
