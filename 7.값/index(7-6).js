/**
 * 암시적 & 명시적
 */
// !! => Boolean
// Number(값) String(값) Boolean(값) Array.from() <- 명시적인 형변환
const result1 = 1 + "입니다";
const result2 = "11" + 11;
const result3 = "2" * "2";
const result4 = ["111"] + "111";
const result5 = Number(String(["111"])) + "111";

console.log(result1); // 1입니다
console.log(typeof result1); // string
console.log(result2); // 1111
console.log(typeof result2); // string
console.log(result3); // 3
console.log(typeof result3); // number
console.log(result4); // 111111
console.log(typeof result4); // string
console.log(result5); // 111111
console.log(typeof result5); // string
