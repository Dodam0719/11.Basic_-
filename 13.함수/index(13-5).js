const func1 = function () {
  console.log(Array.isArray(arguments)); // false
  return arguments;
};
console.log(func1(1, 2, 3, 4, 5, 6, 7)); // { [Iterator] 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7 }

const func2 = function () {
  const convertArr = Array.from(arguments);
  return convertArr;
};
console.log(func2(1, 2, 3, 4, 5, 6, 7)); // [ 1, 2, 3, 4, 5, 6, 7 ]

const func3 = function () {
  const convertArr = Array.from(arguments);
  return convertArr.reduce((prev, curr) => prev + curr);
};
console.log(func3(1, 2, 3, 4, 5, 6, 7)); // 28
