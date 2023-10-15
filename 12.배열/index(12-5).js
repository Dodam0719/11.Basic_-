// 유사 배열 객체 (Array Like Object)
function func() {
  console.log(arguments); // { [Iterator] 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}
  console.log([1, 2].__proto__); // Object(0) []
}
func(1, 2, 3, 4, 5, 6);
