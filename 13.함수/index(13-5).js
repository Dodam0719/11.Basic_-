//arguments객체는 함수에 전달된 인수에 해당하는 Array형태의 객체
//배열처럼 생겼지만 객체이다.
//arguments객체는 함수의 매개변수를 선언하지 않아도 사용 가능
//정해지지 않은 가변인자들을 넘겼을때 유연하게 사용가능
const func1 = function () {
  //단, 배열이 아니라서 배열메서드를 사용할 수 없음
  console.log(Array.isArray(arguments)); // false
  return arguments;
};
console.log(func1(1, 2, 3, 4, 5, 6, 7)); // { [Iterator] 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7 }

const func2 = function () {
  //그래서 Array.from으로 형변환을 해줘야함
  const convertArr = Array.from(arguments);
  return convertArr;
};
console.log(func2(1, 2, 3, 4, 5, 6, 7)); // [ 1, 2, 3, 4, 5, 6, 7 ]

const func3 = function () {
  const convertArr = Array.from(arguments);
  return convertArr.reduce((prev, curr) => prev + curr);
};
console.log(func3(1, 2, 3, 4, 5, 6, 7)); // 28

//화살표 함수에는 arguments가 없어서 선언되지 않음
const func4 = () => {
  return arguments[0];
};
console.log(func4(1));
