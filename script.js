// Место для первой задачи
// function getTimeFromMinutes() {

// }

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// function multiply(a, b) {
// 	console.log(a, b)
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2
// multiply(1, 2, 3, 4); // 1 2

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];

// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING) // Фільтруємо книги з рейтингом більше MIN_BOOK_RATING
//   .map(book => book.author)                      // Отримуємо масив авторів з відфільтрованих книг
//   .toSorted((a, b) => a.localeCompare(b));       // Сортуємо авторів в алфавітному порядку

// console.log(names); // ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]

// function

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);

// promotion(res);

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

// Ответ с кодом этих задач можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

// Но постарайтесь решить самостоятельно 🙂

// function first() {
//   // Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log("Я прошел этот урок!");
// }

// learnJS("JavaScript", done);

// OBJ

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
// };

// console.log(Object.keys(options).length);

// // console.log(options.name);

// // delete options.name;

// let counter = 0; // Переменная счетчик

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]} `);
//     counter++;
//   }
// }
// console.log(counter);

// // Деструктуризация обьекта

// const { border, bg } = options.colors;

//  arr

// const arr = [2, 3, 6, 8, 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");

// const products = str.split(",");
// products.sort();
// console.log(products.join(";"));

// const q = {
//   one: 1,
//   two: 2,
//   three: 3,
//   fourth: {
//     1: "2",
//     2: "4",
//   },
//   five: ["sobaka", "lox", "loxa"],
//   six: ["2", "5", "8", "10"],
// };

// const newQ = { ...q };

// console.log(newQ);

// OOP

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("Hello");
//   },
// };

// const john = {
//   health: 100,
// };

// object.setPrototypeOf(jonh, soldier);

// старое значение __proto__

// const john = Object.create(soldier);

// john.sayHello();

// const fontSize = 26 + "px";

//  Если поставить + (Унарный +) перед строкой получиться число

//

// let number = 5;
// debugger;

// function logNumber() {
//   let number = 4;
//   console.log(number);
// }

// number = 6;

// logNumber();
// debugger;

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };

  return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

/*

function createCounter() {
    let counter = 0;  // Объявляем переменную counter и инициализируем ее значением 0

    const myFunction = function () {
        counter = counter + 1;  // Увеличиваем значение counter на 1 каждый раз, когда вызывается myFunction
        return counter;  // Возвращаем текущее значение counter
    };

    return myFunction;  // Возвращаем функцию myFunction как результат выполнения createCounter
}

Пояснение:
Переменная counter:

Объявлена внутри функции createCounter. Это делает её локальной переменной, доступной только внутри этой функции.
Значение counter инициализируется как 0.
Функция myFunction:

Это функция, объявленная внутри createCounter. Она замыкает в себе переменную counter.
Каждый раз, когда myFunction вызывается, она увеличивает значение counter на 1 и возвращает его.
Возврат myFunction:

После определения myFunction, функция createCounter возвращает её как результат. Таким образом, вызывающий код получит доступ к этой внутренней функции и сможет её вызывать.
2. Использование функции createCounter
javascript
Copy code
const increment = createCounter();  // Вызываем createCounter и сохраняем результат в переменную increment
Пояснение:
Вызов createCounter:

Когда мы вызываем createCounter(), происходит следующее:
Создается локальная переменная counter со значением 0.
Создается функция myFunction, которая увеличивает и возвращает counter.
createCounter возвращает функцию myFunction, которая сохраняется в переменной increment.
Переменная increment:

Теперь increment содержит функцию, которая может увеличивать и возвращать значение counter.
3. Вызов функции increment
javascript
Copy code
const c1 = increment();  // Первый вызов increment
const c2 = increment();  // Второй вызов increment
const c3 = increment();  // Третий вызов increment
Пояснение:
Первый вызов increment():

Когда мы вызываем increment(), выполняется код, который был внутри myFunction.
Значение counter увеличивается с 0 до 1.
Возвращается 1, и это значение сохраняется в переменной c1.
Второй вызов increment():

counter теперь равно 1.
Вызываем increment() снова, и counter увеличивается с 1 до 2.
Возвращается 2, и это значение сохраняется в переменной c2.
Третий вызов increment():

counter теперь равно 2.
Вызываем increment() снова, и counter увеличивается с 2 до 3.
Возвращается 3, и это значение сохраняется в переменной c3.
4. Вывод значений
javascript
Copy code
console.log(c1, c2, c3);  // Выводит: 1 2 3
Пояснение:
Когда мы выводим c1, c2, и c3, на экран выводятся значения 1, 2, и 3 соответственно.
Это показывает, что каждый вызов функции increment() увеличивал значение counter и сохранял его между вызовами благодаря замыканию.
Итоговое понимание
Замыкание: Основной концепт, который здесь используется, — это замыкание. Когда функция myFunction была возвращена из createCounter, она "закрыла" в себе окружение, в котором была создана, включая переменную counter.
Каждый вызов функции increment() имел доступ к тому же самому значению counter, что позволило функции сохранять и изменять его состояние между вызовами.
Так, каждая переменная c1, c2, и c3 содержат значения 1, 2, и 3, которые показывают, что внутреннее состояние counter обновлялось с каждым вызовом функции increment().

*/

{
  let msg = "Hello";
}

console.log(msg); // эта переменая существует только внутри скобок

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let num = 3;
  }

  console.log(num);
}

/* 

•	Какое будет выведено значение: let x = 5; alert( x++ ); ? // 5 (если ++5 будет => 6 , если 5++ будет => 5 но при последующем вызове будет 6  ) 

•	Чему равно такое выражение: [ ] + false - null + true ? //  Когда пустой [] , он будет приведен к строковому типу данных , то есть [] == '' ; Потом когда мы добавляем что-то к строке получаеться строка ; =>  'false' дальше  'false' - null = NaN . В итоге будет ответ будет NaN;

•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? // 2

•	Чему равна сумма [ ] + 1 + 2? //  12 

•	Что выведет этот код: alert( "1"[0] )? // 1 

•	Чему равно 2 && 1 && null && 0 && undefined ? // null  // оператор && и всегда запинаеться на джи

•	Есть ли разница между выражениями? !!( a && b ) и (a && b) ? //  !! => превращает значение в булиновое 

•	Что выведет этот код: alert( null || 2 && 3 || 4 ); ? //  || или запинаеться на правде  2 && 3 => 3 потом  null || 2 && 3 => 3 ответ => 3

•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? false

•	Что выведет этот код: alert( +"Infinity" ); ? number 

•	Верно ли сравнение: "Ёжик" > "яблоко"? //   false // unicode 

•	Чему равно 0 || "" || 2 || undefined || true || falsе ? // 2








*/
