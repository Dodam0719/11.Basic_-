// 꼭 명시적으로 변환하길 권장(안전함)
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number("")); // 0
console.log(Number("String")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(3.141592)); // 3.141592

const strNumber = "1111";
if (Number(strNumber)) {
  console.log("실행"); // 실행
}

// 아래처럼 숫자로 변환하는 방법은 추천하지 않음
console.log(+true); // 1
console.log(+false); // 0
