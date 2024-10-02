const user = {
  name: "Alex",
  surname: "smith",
  birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

for (const key in user) {
  console.log(user[key]);
}

const arr = ["b", "a", "c"];

Array.prototype.someMethod = function () {};

for (const key in arr) {
  console.log(key);
}

for (const key of arr) {
  console.log(arr[key]);
}

console.dir(arr);

//  Цикл for in он получает сам ключ name , surname и тд

// Цикл for of получает значение

// строка и массив иттерируемые обьекты а сам {} - нет

// иттератор это метод который возвращает  {} c методом next.

const salaries = {
  john: 500,
  ivan: 1000,
  anna: 5000,
  sayHello: function () {
    console.log("Hello");
  },
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.john,
    last: this.anna,

    next() {
      if (this.current < this.last) {
        this.current = this.current + 500;
        return { done: false, value: this.current };
      } else {
        return { done: true };
      }

      // {done: true, value: 123}
    },
  };
};

const iterator = salaries[Symbol.iterator]();

console.log(iterator.next());

for (let res of salaries) {
  console.log(res);
}
