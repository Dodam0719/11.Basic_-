/**
 * 전역 스코프 (Global)
 *  ㄴ 가장 쉬우면서 다루이 어려움. 가장 바깥쪽에 위치
 *  ㄴ 어디서나 접근이 가능해서 결과예측 힘듬, 반대로 내부에는 접근불가
 * 지역 스코프 (Local)
 *  ㄴ 함수 스코프
 *  ㄴ 블록 스코프
 * 프로그램이 실행되는 시점 => 런타임 시점
 */

let foo = "foo";
//지역 스코프 단위로 코드를 작성해야 함
{
  foo = "foooooooo";
  console.log(foo);
}
//함수 스코프
function func() {
  foo = "foooo";
  console.log(foo);
}
//블록 스코프
if (true) {
  foo = "fooooooooooo";
  console.log(foo);
}

console.log(foo);
func();
