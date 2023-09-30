/*
 * Scope (스코프)
 * - 변수 유효 범위
 * - 내부에서 외부로는 접근 O
 * - 외부에서 내부로는 접근 X
 *
 * 처음부터 => var => 함수 단위 유효 범위
 * ES2015+ => let, const => 블럭 단위
 */

var globalVal = "함수-단위(전역 변수)";

for (let index = 0; index < 3; index++) {}

function outerFunc() {
  console.log(globalVal); // 함수-단위(전역 변수)

  function innerFunc() {
    var innerVal = "블럭-단위(함수 내부 지역 변수)";
    console.log(index); // index is not defined
  }
  innerFunc();
}

outerFunc();
