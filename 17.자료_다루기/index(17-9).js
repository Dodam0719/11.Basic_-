/**
 * 배열 값 검색(find를 활용해서 검색을 할 수 있음)
 */
const members = ["현석", "장현석", "제로", "베이스"];

const result1 = members.find(function (member) {
  return member === "제로";
});
//없으면 undefined 반환
console.log(result1);

const result2 = members.findIndex(function (member) {
  return member === "제로";
});
//인덱스 값이 반환됨. 없으면 -1 반환
console.log(result2);

//indexOf는 왼쪽에서 오른쪽으로 찾음
members.indexOf(function (member) {
  return member === "제로";
});

//lastIndexOf는 오른쪽에서 왼쪽으로 찾음
members.lastIndexOf(function (member) {
  return member === "제로";
});

//includes는 함수필요없이 요소만 넘기면 되는데, 포함여부 확인
//불리언으로 반환. 있으면 true, 없으면 false
//비교적 최근문법이라 옛날브라우저에서는 잘 안돌아갈 수 있음
//하지만 너무나 편리하고 명확하게 사용 가능
const result5 = members.includes("제로");
console.log(result5);
