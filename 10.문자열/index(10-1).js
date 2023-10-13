// prettier 때문에 ''이 ""로 바뀜
const singleQuote = "";
const doubleQuote = "";
// ES2015+
const backQuote = ``;

const multiLine1 =
  "1\
2\
5\
3\
";
console.log(multiLine1); // 1253

const multiLine2 = `1
2
5
3
`;
console.log(multiLine2);
// 1
// 2
// 5
// 3

// 빈문자열은 null울 주지말고, 말 그대로 비워두어야 함
const empty1 = null;
console.log(empty1 + "hello"); // nullhello

const empty2 = "";
console.log(empty2 + "hello"); // hello
