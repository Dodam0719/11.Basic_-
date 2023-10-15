//매개변수라는 건 함수를 만드는 측(선언하는 측)의 인자
//인자는 함수를 사용하는 측(호출하는 측)의 인자

//매개변수는 함수 바디안에서는 지역변수처럼 작용
//params는 function내부에서 선언되지 않았으나 지역변수처럼 할당해서 사용가능
function func(params) {
  params = params + 10;
  return params;
}
const result = func(1);
console.log(result);

//특정 인자만 넘기고 싶을땐, 다른 방법없이 undefined로 채워야 함
//(자바스크림트에서 매개변수 숫자는 지켜야 함)
function func2(p1, p2, p3, p4) {
  console.log(p2, p4);
  console.log(p1);
  console.log(undefined);
  return;
}
const result2 = func2(undefined, "p2", undefined, "p4");

//이럴때는 객체를 받으면 됨
//자바스크립트의 인자로는 왠만한 모든 걸 다 넘길 수 있음
//그럼 p2에는 'P2'를 넘기고, p4에는 'P4'를 넘김
function func3(objP) {
  const p1 = objP.p1;
  const p2 = objP.p2;
  const p3 = objP.p3;
  const p4 = objP.p4;
  console.log(p2, p4);
  return;
}
const result3 = func3({
  p2: "P2",
  p4: "P4",
});

//위의 객체를 바로 풀어헤쳐서 사용할 수도 있음
function func4({ p1, p2, p3, p4 }) {
  console.log(p2, p4);
  return;
}
const result4 = func4({
  p2: "P2",
  p4: "P4",
});
