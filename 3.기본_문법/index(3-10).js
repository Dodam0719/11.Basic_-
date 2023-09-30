// 나라는 사람을 프로그래밍 언어로 표현하자면?
const hyeonSeok = {
  // key : value
  name: {
    first: "hyeon-seok",
    last: "jang",
  },
  age: 10,
  gender: "male",
  introduce: function (guest) {
    return "hello " + guest + " my name is hyeonseok";
  },
  hobby: ["youtube", "football"],
};

console.log(hyeonSeok.name); // { first: 'hyeon-seok', last: 'jang"', }
console.log(hyeonSeok["name"]["first"]); // hyeon-seok
console.log(hyeonSeok.name.first); // hyeon-seok
console.log(hyeonSeok.name.last); // jang
console.log(hyeonSeok.age); // 10
console.log(hyeonSeok.introduce("jang")); // hello jang my name is hyeonseok
