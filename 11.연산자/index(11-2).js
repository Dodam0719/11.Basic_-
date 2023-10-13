/**
 * 삼항 연산자
 *  ㄴ 3개의 피연산자, 조건 연산자
 */

const val = 조건 ? 참일때 : 거짓일때;
const val = 조건 ? (조건 ? 참일때 : 거짓일때) : 거짓일때;

let val2;

if (조건) {
  val2 = 참일때;
} else {
  val2 = 거짓일때;
}

const age = 20;
const isAdult = age >= 20 ? "성인" : "미성년자";
console.log(isAdult); // 성인
