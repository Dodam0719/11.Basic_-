//프로퍼티 조작
const person = {
  firstName: "jang",
  location: "korea",
};
//person에 새로운 프로퍼티 추가
//이미 const로 만들면 안되는줄 알고 있을수도 있지만,
//객체는 상관이 없음
//정확히 const는 객체뿐만이 아니라 재할당을 막는것뿐이지
//그이외에 이미 할당된 객체,함수,배열을 수정하는건 상관없음
//.단연산자 사용해도 되고 대괄호 사용해도 됨
person.lastName = "hyeonseok";
person["lastName"] = "hyeonseok";
console.log(person);
//수정
person.lastName = "hyeon-seok";
console.log(person);
//삭제
//다양한 방법이 있는데, 객체를 수정이나 삭제를 해서
//새로운 객체를 만들어내는 방법이 제일 좋음
delete person.location;
console.log(person);
