/**
 * # 배열의 length
 *
 * 배열에서 가장 높은 인덱스를 추적(배열의 길이 아님)
 */

const arr = [1, 2, 3];
//건너뛰어서 값을 넣으면 빈공간이 생겨서
arr[9] = undefined;
//가장 높은 인덱스인 10이라고 나옴
console.log(arr.length); // 10

//빈공간을 처리해주는 자연스러운 배열 메서드가 있음
//forEach메서드 안에 콜백 함수를 넣으면 element들을 순회해서 볼 수 있는데
//강제로 넣은 건 안 나옴
arr.forEach((el) => console.log(el)); // 1, 2, 3, undefined

//배열의 length를 강제로 조작하면 동일하게 인덱스도 20으로 늘어남
arr.length = 20;
console.log(arr.length); // 20
//똑같이 빈 공간이 생김
console.log(arr); // [1, 2, 3, <6 empty items>, undefined, <10 empty items> ]

//legnth를 0으로 줄여보면, 배열이 비어버림
//실제로 빈배열을 만들때, 0을 넣어서 초기화하는 경우 있음
//배열은 불변값이 아니라 참조값이기 때문에 초기화함
arr.length = 0;
console.log(arr); // []
