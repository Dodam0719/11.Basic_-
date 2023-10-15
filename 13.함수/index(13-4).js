function func1(p1, p2, p3, p4) {
  console.log(p2, p4); // p2, p4
  console.log(undefined); // undefined
  console.log(p1); // undefined
  return;
}

const result1 = func1(undefined, "p2", undefined, "p4");
console.log(result1); // undefined

// 아래처럼 객체로 넘기면 순서가 상관없게 됨
function func2(objP) {
  const p1 = objP.p1;
  const p2 = objP.p2;
  const p3 = objP.p3;
  const p4 = objP.p4;

  console.log(p2, p4);

  return;
}

// 이 문법이 익숙하지 않다면
const result2 = func2({
  p2: "p2",
  p4: "p4",
});
console.log(result2);
// 이렇게 작성해도 됨
const obj3 = {
  p2: "p2",
  p4: "p4",
};
const result3 = func2(obj3);
console.log(result3);

// 객체구조분해할당
function func4({ p1, p2, p3, p4 }) {
  console.log(p2, p4);

  return;
}
