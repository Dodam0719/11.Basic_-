/**
 * 삼항 연산자
 *  ㄴ 3개의 피연산자, 조건 연산자
 */

//물음표를 기준으로 조건에 대한 결과가 나오는 것
//if문을 사용하는 것과 매우 비슷함
const val = 조건 ? 참일때 : 거짓일때;
//중첩으로 계속 이어서 사용해 나갈 수도 있음. 그런데 이렇게는 사용 안하는게 좋음
const val = 조건 ? (조건 ? (조건 ? 참일때 : 거짓일때) : 거짓일때) : 거짓일때;

let val2;

if (조건) {
  val2 = 참일때;
} else {
  val2 = 거짓일때;
}

const age = 20;
const isAdult = age >= 20 ? "성인" : "미성년자";
console.log(isAdult); // 성인
