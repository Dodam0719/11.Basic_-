/**
 * - Logical Operator (논리 연산자)
 * OR - ||
 * AND - &&
 * NOT - !
 */

console.log(true || true); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(true && true); // true
console.log(false && true); // false
console.log(false && false); // false

let age = 20;
const genderType = "GIRL";

let isAdult = age > 19;
const isGirl = genderType === "GIRL";

if (isAdult) {
  if (isGirl) {
    console.log("나는 성인이다!"); // 나는 성인이다
  }
}

if (isAdult && isGirl) {
  console.log("나는 성인이다!"); // 나는 성인이다
}

// 이미 isAdult가 true이기 때문에 console 출력안됨
if (isAdult === false) {
  console.log("나는 성인이 아니다");
}

age = 17;
isAdult = age > 19;
if (isAdult === false) {
  console.log("나는 성인이 아니다"); // 나는 성인이 아니다
}

if (!isAdult) {
  console.log("나는 성인이 아니다"); // 나는 성인이 아니다
}

if (!isAdult || isGirl) {
  console.log("여학생이다"); // 여학생이다
}

function getName1(firstName, lastName) {
  return "저는 " + firstName + " " + lastName + "입니다";
}
console.log(getName1("장", "현석")); // 저는 장 현석입니다
console.log(getName1("장")); // 저는 장 undefined입니다

function getName2(firstName, lastName) {
  const fName = firstName === undefined ? "성 없음" : firstName;
  const lName = lastName === undefined ? "이름 없음" : lastName;
  return "저는 " + fName + " " + lName + "입니다";
}
console.log(getName2("장", "현석")); // 저는 장 현석입니다
console.log(getName2("장")); // 저는 장 이름 없음입니다

//getName2의 fName과 lName을 아래처럼 줄여서 쓸 수도 있음
function getName3(firstName, lastName) {
  const fName = firstName || "성 없음";
  const lName = lastName || "이름 없음";

  console.log(!!undefined); // false
  console.log(!!undefined || !!"이름 없음"); // true

  return "저는 " + fName + " " + lName + "입니다";
}
console.log(getName3("장", "현석")); // 저는 장 현석입니다
console.log(getName3("장")); // 저는 장 이름 없음입니다
