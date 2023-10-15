/**
 * 호이스팅 : 변수 선언을 끌어올린다.
 */

//이렇게 작성하면 호이스팅 되서
function foo() {
  console.log(hoist);
  var hoist = "호이스팅";
  console.log(hoist);
}
//아래처럼 변수의 선언 부분이 위로 올라오고,
//나머지는 순서대로 동작함. 초기화부분에는 할당만 함
function foo2() {
  var hoist;
  console.log(hoist);
  hoist = "호이스팅";
  console.log(hoist);
}

//호이스팅을 막으려면 var를 안쓰면 됨.대신 let, const 사용
//템프럴대드존(임시적사각지대)이라고 해서 TDZ가 생겨서 오류를 호출
//물론 내부적으로 호이스팅은 일어나지만 보이지 않는것처럼
//사용자에게 에러를 던져서 막아주는 것
function foo3() {
  console.log(hoist);
  let hoist = "호이스팅";
  console.log(hoist);
}
//호이스팅의 동작원리는 사용자가 작성할떄랑 동작할때랑 다르기 때문에
//런타임때, js가 동작이 되면서 선언과 할당이 분리되는걸 넘어서
//이 동작방식이 굉장히 많이, 선언했을때랑 실행했을때랑 다르구나 라는걸 꼭 기억
foo();
foo2();
foo3();
