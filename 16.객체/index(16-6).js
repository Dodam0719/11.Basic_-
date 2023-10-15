//생성자
const me = {
  name: "jang",
  age: 10,
  location: "korea",
};
//위와 여러개의 객체를 만들어 낼때 복사하지 않고 생성자 함수 사용
//생성자 함수는 이름을 파스칼케이스만듬
function Person(name, age, location) {
  //여기서의 this는 생성될 인스턴스를 가리킴
  this.name = name;
  this.age = age;
  this.location = location;

  this.getName = function () {
    return this.name + "입니다";
  };
}
const me2 = new Person("Jang", 20, "korea");
console.log(me2);
const you = new Person("kim", 30, "china");
console.log(you);
console.log(me2.getName());
console.log(you.getName());

//생성자함수는 이제는 잘 쓰이지 않음
//ES2015 부터는 class가 나와서 그걸 사용함
