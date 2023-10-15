/**
 * call
 * apply
 * bind
 */

const person = {
  name: "현석",
  sayName: function () {
    return this.name + "입니다";
  },
};

const zero = {
  name: "베이스",
  sayName: function () {
    return this.name + "입니다";
  },
};

// call
function sayFullName(firstName) {
  return firstName + this.sayName();
}

const result = sayFullName.call(person, "장");
console.log(result); // 장현석입니다
const result2 = sayFullName.call(zero, "Jang");
console.log(result2); // Jang베이스입니다

// apply
function sayFullName2(firstName) {
  return arguments[1] + this.sayName();
}

const result3 = sayFullName.apply(person, ["장", "Jang"]);
console.log(result3); // 장현석입니다
const result4 = sayFullName.apply(zero, ["제로", "Zero"]);
console.log(result4); // 제로베이스입니다

// bind
const sayFullNamePerson = sayFullName.bind(person);
console.log(sayFullNamePerson("장")); // 장현석입니다
const sayFullNameZero = sayFullName.bind(zero);
console.log(sayFullNameZero("제로")); // 제로베이스입니다
