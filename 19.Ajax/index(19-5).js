// JSON

const obj = { x: 5, y: 6 };

const json = JSON.stringify({ x: 5, y: 6 });
const jsonParseObj = JSON.parse(json);

console.log(typeof obj); // object
console.log(typeof json); // string
console.log(typeof jsonParseObj); // object

/**
 * JSON Parse (서버에서 데이터를 가져올때)
 *   ㄴ JSON -> "JS Object"
 *
 * JSON stringify (서버로 데이터를 보낼때)
 *   ㄴ "JS Object" -> JSON
 *
 * JavsScript (프론트엔드)
 *  |
 * JSON
 *  |
 * Java, Python, Ruby, Go (백엔드)
 */
