//일반적인 함수 선언
//함수를 만드는 입장에서의 ()안에 들어가는 인자를 매개변수라고 함
//매개변수를 통해서 함수에서 다양한 일을 할 수 있음
function func() {}
//자바스크립트의 함수는 일반적으로 반환문을 생략
//하지만, 생략을 해도 내부적으로는 undefined가 반환되고 있음
console.log(func());

//메서드로도 만들 수 있음.
//메서드는 일종의 객체의 prop에 value가 함수일 경우
const obj = {
  prop: function () {},
};

//생성자 함수 : 특정인스턴스를 만들어 낼 수 있다는 함수
//대문자로 시작하는 케이스
function Myobj() {}

//화살표 함수 (ES2015+, ES6)
const arrowFunc = () => {};

//함수를 만드는 입장에서의 ()안에 들어가는 인자를 매개변수라고 함
//매개변수를 통해서 함수에서 다양한 일을 할 수 있음
function sum(param1, param2) {
  return param1 + param2;
}
console.log(sum(1, 2));
