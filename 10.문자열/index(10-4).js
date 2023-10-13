function genHello1() {
  return 123 + "word";
}
console.log(genHello1("jang")); // 123word

function genHello2(name) {
  return "안녕하세요 " + name + "님 반갑습니다";
}
console.log(genHello2("jang")); // 안녕하세요 jang님 반갑습니다

function genHello3(name) {
  return "안녕하세요 " + (name ? name : "이름없음") + "님 반갑습니다";
}
console.log(genHello3("jang")); // 안녕하세요 jang님 반갑습니다

function genHello4(name) {
  const resultName = name ? name : "이름없음";
  return "안녕하세요 " + resultName + "님 반갑습니다";
}
console.log(genHello4("jang")); // 안녕하세요 jang님 반갑습니다

function genHello5(name) {
  const resultName = name || "이름없음";
  return "안녕하세요 " + resultName + "님 반갑습니다";
}
console.log(genHello5("jang")); // 안녕하세요 jang님 반갑습니다
