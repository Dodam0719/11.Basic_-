/*
 * Scope (스코프)
 * - 변수 유효 범위
 * - 내부에서 외부로는 접근 O
 * - 외부에서 내부로는 접근 X
 *
 * 처음부터 => var
 * ES2015+ => let, const
 */

var globalVal = "함수-단위(전역 변수)";

function outerFunc() {
  console.log(globalVal); // 함수-단위(전역 변수)
  console.log(innerVal); // innerVal is not defined

  function innerFunc() {
    var innerVal = "블럭-단위(함수 내부 지역 변수)";
    console.log(globalVal);
  }
  innerFunc();

  return num;
}

outerFunc();
