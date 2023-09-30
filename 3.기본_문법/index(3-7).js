const data = "a";
const num = 0;
const boolean = true;

const arr = [data, num, boolean, "name"];
console.log(arr.length); // 4
console.log(typeof arr); // object
console.log(arr); // ['a', 0, true, 'name']

// forEach로 배열을 돌려볼 수 있음
arr.forEach((element) => {
  console.log(element); // a, 0, true, name
});

arr[4] = "Test";
arr[0] = "첫번째";
arr[1] = "Second";
console.log(arr); // ['첫번째', 'Second', true, 'name', 'Test']

arr.push("마지막");
console.log(arr); // ['첫번째', 'Second', true, 'name', 'Test', '마지막']

arr.unshift("첫번째 또 추가");
console.log(arr); // ['첫번째 또 추가', '첫번째', 'Second', true, 'name', 'Test', '마지막']
