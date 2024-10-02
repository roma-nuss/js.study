// const obj = {
//   name: "Test",
//   [Symbol("id")]: 1,
//   getId: function () {
//     return this[id];
//   },
// };

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// // console.log(obj.getId);

// for (let value in obj) console.log(value);

const myAwesomeDB = {
  movies: [],
  actors: [],
  [Symbol("id")]: 123,
  [Symbol.for("ss")]: 123,
};

// Стороний код библиотеки

myAwesomeDB.id = "3232323232";

console.log(myAwesomeDB["id"]);
console.log(myAwesomeDB);
