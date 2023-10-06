/**
 *
 * JS Type
 * - 원시(Primitive)
 * - 객체, 참조(Reference)
 */

const obj = {
  str: "string",
};
obj.str.toUpperCase();

console.log(obj); // { str: 'string' }

obj.num = 123;
obj.bool = true;

console.log(obj); // { str: 'string', num: 123, bool: ture}
