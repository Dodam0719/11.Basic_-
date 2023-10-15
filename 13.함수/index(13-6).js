const func1 = (...nums) => {
  return nums.reduce((prev, curr) => prev + curr);
};
console.log(func1(1, 2, 3, 4, 5, 6, 7)); // 28

// 나머지 매개변수는 항상 마지막 순서에 사용
// 나머지 매개변수를 사용해서 가변인자를 사용하길 권장
const func2 = (first, second, ...nums) => {
  console.log(first); // 1
  console.log(second); // 2
  console.log(Array.isArray(nums)); // true

  return nums.reduce((prev, curr) => prev + curr);
};
console.log(func2(1, 2, 3, 4, 5, 6, 7)); // 25
