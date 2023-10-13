if (false) {
  // 도달할 수 없습니다.
} else {
  console.log(false); // false
}

if (null) {
  // 도달할 수 없습니다.
} else {
  console.log(false); // false
}

if (undefined) {
  // 도달할 수 없습니다.
} else {
  console.log(false); // false
}

if (0) {
  // 도달할 수 없습니다.
} else {
  console.log(false); // false
}

if (-0) {
  // 도달할 수 없습니다.
} else {
  console.log(false); // false
}

if (0n) {
  // 도달할 수 없습니다.
} else {
  console.log(false); // false
}

if (NaN) {
  // 도달할 수 없습니다.
} else {
  console.log(false); // false
}

if ("") {
  // 도달할 수 없습니다.
} else {
  console.log(false); // false
}

const emptyString = ""; // false
if (emptyString.length === 0) {
  console.log("문자열이 비어있음"); // 문자열이 비어있음
}

// emptyString.length === 0 는 true
// emptyString.length 는 0 이므로 falsy
// 그럼 부정연산자를 한번 씌우면 true가 됨
if (!emptyString) {
  console.log("문자열이 비어있음"); // 문자열이 비어있음
}

// 부정연산이 헷갈린다면, 아래와 같이 작성해도 됨
if (emptyString) {
  console.log("문자열이 있음");
} else {
  console.log("문자열이 비어있음"); // 문자열이 비어있음
}
