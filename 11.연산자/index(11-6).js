// 기타 연산자

// 쉼표
// ,콤마는 모두 평가를 하고 제일 오른쪽의 값을 반환
let test = (123456, "ABC");
console.log(test); // ABC

// void 연산자는 표현식을 평가하고, undefined를 반환
// 표현식 결과를 버릴때 사용
console.log(void 1); // undefined
console.log(void 0); // undefined
//아래의 경우는 (void 10) + 10으로 해석되서 NaN이 나오는 거고, (10 + 10)을 해주면 undefined 나옴
console.log(void 10 + 10); // NaN => (void 10) + 10이 되어서..
console.log(void (10 + 10)); // undefined

//그리고 void연산자는 '반환이 없다'를 의미하므로,
//함수내에서 return을 생략하면, undefined가 반환됨
function voidFunction() {}
console.log(voidFunction()); // undefined
