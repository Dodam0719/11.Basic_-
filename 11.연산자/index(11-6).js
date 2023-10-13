// 기타 연산자

// 쉼표
let test = (123456, "ABC");
console.log(test); // ABC

// void
// 표현식 결과를 버릴때 사용
console.log(void 1); // undefined
console.log(void 0); // undefined
console.log(void 10 + 10); // NaN => (void 10) + 10이 되어서..
console.log(void (10 + 10)); // undefined

function voidFunction() {}
console.log(voidFunction()); // undefined
