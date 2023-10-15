/**
 * 객체 생성
 */

// 싱글 리터럴 객체
const object = {
  // 콜론을 기준으로 왼쪽이 key 혹은 property,
  // 오른쪽이 value 혹은 값이라고 한다.
  property: "value",
  // property가 값을 함수로 가질 경우에는 그걸 메서드라고 함
  // (=객체가 속성을 함수로 가질 경우에 메서드라고 하는 것)
  method: function () {},
};
console.log(object);

// NewObject는 PascalCase인데 대문자로 시작하고
// 단어가 달라질때마다 대문자로 붙여준다.
function NewObject(name) {
  this.name = name;
}

// new와 함께 쓰임. new와 조합을 해야 객체를 만들어 낼 수 있음
const newObject = new NewObject("jang");

// 아래는 오브젝트 크리에이트(메서드)를 이용하는 방법
// 인자를 2개 받는데, 첫번째는 프로토타입, 두번째는 객체 서술자(기술자)
const newObject2 = Object.create(Object.prototype, {
  name: {
    value: "jang",
    writable: true, // 덮어쓸 수 있는지
    enumerable: true, // 열거할 수 있는지
    configurable: true, // 객체 서술자를 수정할 수 있는지
  },
});
console.log(newObject2); // { name: 'jang2' }
newObject2.name = "Kim";
// 덮이쓰기에 true를 해놔서 kim으로 바뀜
console.log(newObject2); // { name: 'kim' }

// 열거할 수 있는지 확인하는 방법. for in문 활용
for (const key in newObject2) {
  console.log(key);
}

newObject2;
