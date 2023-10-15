/**
 * 배열 요소 병합
 * concat()이라는 메서드는 주어진 배열이나 값들을 합쳐서 새 배열로 반환
 */
const array = ["JS", "HTML", "CSS"];
const newArr = array.concat("TS", "Java");
//원본 배열은 훼손되지 않고 새 배열이 만들어짐
console.log(array);
console.log(newArr);
//concat을 뒤로 보내면, concat을 기준으로 인자로 들어오는게 뒤에 붙음
const newArr2 = ["TS", "Java"].concat(array);
console.log(array);
console.log(newArr2);
//배열구조문은 ...을 이용해서 간단하게 사용
const newArr3 = [...array, "TS", "Java"];
console.log(array);
console.log(newArr3);
//배열구조문은도 위치를 바꿔서 뒤에서 사용가능
const newArr4 = ["TS", "Java", ...array];
console.log(array);
console.log(newArr4);
//새로운 배열을 만들어서 합치는것도 가능
const other = ["TS", "Java"];
const newArr5 = [...array, ...other];
console.log(newArr5);
