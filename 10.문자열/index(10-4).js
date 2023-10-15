//문자열 병합

function genHello1() {
  return 123 + "word";
}
console.log(genHello1("jang")); // 123word

function genHello2(name) {
  return "안녕하세요 " + name + "님 반갑습니다";
}
console.log(genHello2("jang")); // 안녕하세요 jang님 반갑습니다

//return '안녕하세요 ' + name ? name : '이름없음' + '님 반갑습니다';
//연산자 우선순위 떄문에 undefined가 나옴
//그래서 괄호로 우선순위를 만들어주면 제대로 나옴
function genHello3(name) {
  return "안녕하세요 " + (name ? name : "이름없음") + "님 반갑습니다";
}
console.log(genHello3("jang")); // 안녕하세요 jang님 반갑습니다

//혹은 아래와 같이 함수에 먼저 우선순위를 초기화?하고 사용해도 됨
function genHello4(name) {
  const resultName = name ? name : "이름없음";
  return "안녕하세요 " + resultName + "님 반갑습니다";
}
console.log(genHello4("jang")); // 안녕하세요 jang님 반갑습니다

//혹은 or 연산자 사용가능
function genHello5(name) {
  const resultName = name || "이름없음";
  return "안녕하세요 " + resultName + "님 반갑습니다";
}
console.log(genHello5("jang")); // 안녕하세요 jang님 반갑습니다
