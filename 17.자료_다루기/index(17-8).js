/**
 * sort 정렬
 */
const numbers = [4, 2, 5, 1, 3];
const orderNumbers = numbers.sort(function (a, b) {
  //a 와 b 두개씩 비교하는것. 오름차순은 a-b, 내림차순은 b-a
  return a - b;
});
console.log(orderNumbers);

//문자열도 가능한데, 유니코드라는걸로 구분해서 localcCompare 사용
const words = ["마", "가", "라", "나", "다"];
const orderNumbers2 = words.sort(function (a, b) {
  //똑같이 내림차순은 a랑 b 위치 바꿔줌
  return a.localeCompare(b);
});
console.log(orderNumbers2);

//화살표함수로 변환가능
const 내림차순 = (a, b) => b.localeCompare(a);
const orderNumber3 = words.sort(내림차순);
console.log(orderNumbers2);
const 오름차순 = (a, b) => a.localeCompare(b);
const orderNumber4 = words.sort(오름차순);
console.log(orderNumbers2);
