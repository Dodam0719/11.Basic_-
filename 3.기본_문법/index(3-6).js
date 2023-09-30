// && => and => 그리고!!
// || => or => 또는!!

// ! 연산자
var not1 = !true; // !t는 false 반환
var not2 = !false; // !f는 true 반환
var not3 = !"Cat"; // !t는 false 반환

console.log(not1); // false
console.log(not2); // true
console.log(not3); // false

not3 = !!"Cat"; // !! 두번 사용
console.log(not3); // true
