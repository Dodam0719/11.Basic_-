/**
 * 배열 고차 함수로 조작
 *
 * map
 * filter
 * reduce
 */
const langs = ["JS", "HTML", "CSS"];
//값이 'JS'일때 langs.map의 function(함수)이 실행되서
//그 실행된 결과가 newLangs에 순서대로 들어가는 것
//여기서 map은 내가 가진 배열을 새롭게 조작해서 새로운 배열로 반환할때 사용
//map은 자료 다룰때 굉장히 많이 사용하는 함수
const newLangs = langs.map(function (lang) {
  return lang.toLowerCase() + " 언어";
});
console.log(langs);
console.log(newLangs);

const langs2 = ["JS", "HTML", "CSS", 0, 1, 2, 3];
//filter는 js의 특정조건에 맞는 배열을 만들 수 있음
//인자로 함수를 넘기는데, 만약 typeof el이 숫자라면 그걸 반환
const numbers = langs2.filter(function (el) {
  if (typeof el === "number") {
    return el;
  }
});
console.log(numbers);
//인자로 함수를 넘기는데, 만약 typeof el이 숫자라면 그걸 반환
const strings = langs2.filter(function (el) {
  if (typeof el === "string") {
    return el;
  }
});
console.log(strings);

//아니면 조건을 별도의 함수로 만든뒤, 불러오는 형태로도 사용가능
const isNumber = function (el) {
  if (typeof el === "number") {
    //(return el;을 return true로 바꿔도 됨)
    return true;
  }
};
const number2 = langs2.filter(isNumber);
console.log(number2);
//위의 함수를 화살표함수를 사용해서 조금 더 간단하게 바꿀 수 있음
const strings2 = langs2.filter((el) => typeof el === "string");
console.log(strings2);

//숫자가 무작위로 들어오는 걸 합쳐주는 sumTotal이라는 함수만듬
//인자가 얼마나 들어오는지 알 수 없음. 가변인자
//전형적인 명령형 프로그래밍 방법
function sumTotal() {
  let temp = 0;

  for (let i = 0; i < arguments.length; i++) {
    temp = temp + arguments[i];
  }

  return temp;
}
console.log(sumTotal(1, 2, 3, 4, 5, 6, 7));
//레스트파라미터라는걸 활용해서 numbers로 받아볼수도 있음
//이때, reduce는 누적된 값을 만들때 굉장히 편함
//위에서 for문을 사용했는데, 여기서는 reduced에 함수를 인자로 받아서 사용
function sumTotal2(...numbers) {
  //total은 누적값, current는 현재값
  return numbers.reduce(function (total, current) {
    //아래에서 매번 return된 결과물이 위의 함수 total로 들어감
    return total + current;
  }, 0); //0은 초기값으로, 명시적으로 넣어주면 좋음
}
console.log(sumTotal2(1, 2, 3, 4, 5, 6, 7));
//아래처럼 화살표함수로도 만들 수 있음
function sumTotal3(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log(sumTotal3(1, 2, 3, 4, 5, 6, 7));
