// 템플릿 리터럴
// 1. 멀티라인 (개행)이 자유로움
// 2. Basic String Formatting -> 보간법을 활용 -> 표현식을 문자열 포함 가능
// 3. HTML Escaping : 안전하게 사용하도록 도움 (XSS, SQL Injection)

//innerHTML을 통해서 위의 문자열을 바로 HTML DOM으로 변환한 다음에 넣는 작업을 하는 경우가 있는데,
//이러한 경우에 해커들에게 취약한 문제점이 생길 수 있음
//??? 부분에 어떠한 값이 들어올지는 모르지만, 취약점을 이용할 수 있음
//이걸 도와주는 템플릿 리터럴을 사용할 수 있음
const htmlTemplate = '<div>' + '안녕하세요' + '</div>'
const htmlTemplate = '<div>' + ?????? + '</div>'
body.innerHTML = htmlTemplate;

//아래와 작성하면 나중에 코드가 굉장히 복잡해질 수 있음
//개행도 잘 안되는 문자열이기 때문에... \n을 넣어줘야 개행이 됨
// + name + 부분은 굉장히 Injection에 취약함
function genHello(name) {
  return '안녕하세요 ' + name + '님 반갑습니다'
}
console.log(genHello('jang'));

//ES2015+에서는 backQoute를 사용하면 됨
function genHello2(name) {
  return `안녕하세요 + name + 님 반갑습니다`
}
console.log(genHello('jang'));
//backQoute는 개행도 가능하고, S{}를 사용하면 +도 필요없음?
//강의에서는 개행이 되는데, 여기선 반영안됨
function genHello2(name) {
  return `안녕하세요
  ${name} 님
  반갑습니다`;
}
console.log(genHello2('jang'));

function genDivision(innerText) {
  return `<div>${innerText}</div>`;
}
console.log(genDivision('jang'));
//어떠한 돔에 아래와 같이 넣으면 html요소가 body에 삽입됨
const divTag = genDivision('jang');
body.innerHTML = divTag;