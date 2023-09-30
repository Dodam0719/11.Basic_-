// 함수 선언문
function func(num) {
  if (10 > num) {
    return "Hello";
  }
  return undefined;
}

// 함수 호출
console.log(func()); // undefined
console.log(func(1)); // Hello
console.log(func(2)); // Hello
console.log(func(3)); // Hello
console.log(func(4)); // Hello
console.log(func(11)); // undefined
console.log(func(33)); // undefined
