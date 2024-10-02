const birthday = Symbol("birthday");

const user = {
  name: "Alex",
  surname: "smith",
  [birthday]: "20/04/1994",
  birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

// console.log(Object.getOwnPropertyDescriptor(user, "name"));
console.log(Object.getOwnPropertyDescriptor(user, "birtday"));
// Object.defineProperty(user, "name", { writable: false });
// Object.defineProperty(user, "gender", { value: "male" }); // если мы создаем свойство при помощи defineProrepty, то все флаги будут стоять в положении false

// Object.defineProperty(user, "birthday", {
//   value: prompt("Date?"),
//   enumerable: true,
//   configurable: true,
// });

// console.log(Object.getOwnPropertyDescriptor(user, "gender"));
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

Object.defineProperty(user, "showMyPublicData", { enumerable: false });

for (let key in user) console.log(key);

Object.defineProperties(user, {
  name: { writable: false },
  surname: { writable: false },
});

/*
Object.keys
Object.values
Object.entries
*/

// writable -  если параметр стоит в true его можно будет изменить , если false то только для чтения
// enumerable - если свойство в true то свойство будет  перечисляться в цыклах , если false то будут игнорировать
// configurable - если true то свойство можно будет удалить, а атрибуты изменить
