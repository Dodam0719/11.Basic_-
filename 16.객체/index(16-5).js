//인스턴스는 유일한(고유한) 객체
//특정공간의 메모리를 차지하고 있는 실제 고유한 객체
const me = {
  name: "jang",
  age: 10,
  location: "korea",
};
const me2 = {
  name: "jang",
  age: 10,
  location: "korea",
};
const you = {
  name: "seok",
  age: 20,
  location: "Germany",
};
//me와 me2는 완전히 같은 속성과 값을 가지고 있지만
//각자 다른 인스턴스임
console.log(me === me2);
//각자 인스턴스의 속성에 접근하면 같다고 나옴
console.log(me.name == me2.name);
