//프로퍼티 접근자(getter, setter)
const person = {
  _firstName: "jang",
  lastName: "hyeon-seok",
  //get이라는 연산자를 사용하긴 했지만
  //firstName이 두번쓰여서 재귀함수처럼 될 수 있기에
  //_언더바를 붙여서 우회를 해준다.
  get firstName() {
    //현재단계에서의 this는 person
    //person이라고 계속 적기 귀찮아서 this로 대신함
    return this._firstName.toUpperCase();
  },
  //set은 새로운 값을 받아야 함
  set firstName(newFirstName) {
    //이상한값이 들어오는걸 방지하려면 if문 사용
    if (typeof newFirstName !== "string") {
      this._firstName = "undefined name";
      return;
    }
    this._firstName = newFirstName;
  },
  get fullName() {
    return this._firstName + this.lastName + "입니다";
  },
};
console.log(person.fullName);
console.log(person.firstName);
person.firstName = "kim";
console.log(person.firstName);
person.firstName = 123456;
console.log(person.firstName);
