const squidMembers = ["기훈", "상우", "일남", "준호", "새벽", "알리"];

// 배열의 끝에 요소 추가
squidMembers.push("덕수");
console.log(squidMembers); // ["기훈", "상우", "일남", "준호", "새벽", "알리", "덕수"]

// 배열의 앞에 요소 추가
squidMembers.unshift("미녀");
console.log(squidMembers); // ["미녀", "기훈", "상우", "일남", "준호", "새벽", "알리", "덕수"]

// 배열에서 요소의 인덱스 찾기(존재하는 인덱스번호를 보여줌)
// -1이 반환되는건 존재하지 않는다는 뜻
// 인덱스번호가 0번부터 시작하는데, -1은 존재하지 않는다는 뜻
console.log(squidMembers.indexOf("현석")); // -1
// 존재하는 인덱스 번호를 반환
console.log(squidMembers.indexOf("상우")); // 2
// lastIndexOf는 끝에서부터 검색
// 검색하고자 하는 요소가 끝부분에 있을 확률이 높을때, 끝에서부터 역순으로 검색
console.log(squidMembers.lastIndexOf("상우")); // 2

// 배열에서 요소의 포함 여부 확인
console.log(squidMembers.includes("상우")); // true
console.log(squidMembers.includes("현석")); // false

// 배열의 앞 요소 지우기 (shift는 unshift의 반대)
console.log(squidMembers.shift("미녀")); // 미녀
console.log(squidMembers); // ["기훈", "상우", "일남", "준호", "새벽", "알리", "덕수"]

// 배열의 끝 요소 지우기 (pop은 push의 반대)
console.log(squidMembers.pop("덕수")); // 덕수
console.log(squidMembers); // ["기훈", "상우", "일남", "준호", "새벽", "알리"]

// 특정 인덱스 요소 지우기
// 첫번째 숫자로 입력한 인덱스부터, 두번째 숫자로 입력한 개수까지 삭제 (원본 배열 훼손)
// 2번 인덱스에서 1개를 지운다는 뜻
console.log(squidMembers.splice(2, 1)); // ["일남"]
console.log(squidMembers); // ["기훈", "상우", "준호", "새벽", "알리"]
