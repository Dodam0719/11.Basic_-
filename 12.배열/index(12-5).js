//유사 배열 객체(Array Like Object
//배열과 비슷해보이지만 배열이 아니다

//함수 내부적으로 자바스크립트는 arguments라는 객체를 가짐
//arguments는 유사배열객체의 하나의 사례
//배열처럼 생겼지만 배열메서드를 사용할 수 없음
function func() {
  console.log(arguments); // { [Iterator] 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}
  console.log([1, 2]._proto_); // Object(0) []
}
func(1, 2, 3, 4, 5, 6);

//nodeList 유사배열객체 중에 하나
//nodeList는 forEach, entries, keys 등 제공
//아래 문장은 브라우저 콘솔창에서 확인하는 내용
// const nodeList = document.querySelectorAll('li');

//Array.isArray를 사용하면 배열로 사용가능한지 반환해줌
console.log(Array.isArray(arguments));
console.log(Array.isArray([]));

//Array.from을 사용하면 배열로 바꿀 수 있음
// const convertNodeList = Array.from(nodeList);
//꼭 바꿔서 사용해야 되는지, 왜 바꿔야되는지 생각하면 좋음
