//정수로 변환

console.log(parseInt("10"));
console.log(Number("10"));

//Number.isInteger는 주어진 값이 정수인지 판별
console.log(Number.isInteger("10"));

//Number.isSafeInteger는 주어진 값이 안전한 정수인지 판별
console.log(Number.isSafeInteger("10"));

//radix가 undefined면 value를 내보내고.. 아니면 다른건 내보내는 함수
//radix는 선택적인 매개변수라서 대부분 무시하는데, 몇진수인지도 꼭 넘겨주어야 함
function parseInt2(value, radix) {
  if (radix === undefined) {
    return Number(value);
  }
  return;
}
