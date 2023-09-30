// 초기화; 평가(참 => 실행, 거짓 => 다음으로); 매번 실행되는 평가식;
const array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  console.log(i); // 0, 1, 2
  console.log(array[i]); // 1, 2, 3
}
