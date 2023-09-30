// 기본 한 줄 주석

/* 기본 한 줄 주석 */

/*
  여러 줄
  주석입니다.
*/

//추천하지는 않지만, 아래처럼 끼워넣기 형식으로 사용할 수도 있음
console.log("Hello " /* 끼워넣기 */ + "World"); // Hello World

// JS DOC
// 정말 상세하게, 이 코드를 사용하는 사람들을 위해서 남기는 주석
/**
 * Represents a book.
 * @constructor
 *
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */

function Book(title, author) {}
