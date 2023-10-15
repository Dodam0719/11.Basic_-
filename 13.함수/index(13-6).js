//나머지 매개변수 ...으로 표시
//나머지 매개변수는 배열로 동작할 수 있기 때문에 형변환 생략가능
const func1 = (...nums) => {
  return nums.reduce((prev, curr) => prev + curr);
};
console.log(func1(1, 2, 3, 4, 5, 6, 7)); // 28

//다른 매개변수랑 연관지어서 사용할 수 있음(조합해서 사용 가능)
//그렇지만 나머지 매개변수는 중간에는 사용할 수 없고 제일 마지막부분에 사용
// 나머지 매개변수를 사용해서 가변인자를 사용하길 권장
const func2 = (first, second, ...nums) => {
  console.log(first); // 1
  console.log(second); // 2
  console.log(Array.isArray(nums)); // true

  return nums.reduce((prev, curr) => prev + curr);
};
console.log(func2(1, 2, 3, 4, 5, 6, 7)); // 25
