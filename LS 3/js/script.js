"use strict";

// const box = document.getElementById("box");

// console.log(box);

// const btns = document.getElementsByTagName("button")[1]; // [1] => получаем только 2 кнопку

// console.log(btns); // =>  получаем htmlCollection псевдомассив

// const circles = document.getElementsByClassName("circle");
// console.log(circles);

// const hearts = document.querySelectorAll(".heart");

// console.log(hearts);

// hearts.forEach((item) => {
//   console.log(item);
// });

// const oneHeart = document.querySelector(".heart");
// console.log(oneHeart);

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

console.dir(box);

box.style.backgroundColor = "blue";

box.style.width = "500px";

box.style.cssText = "";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div"); // файл создаеться только внутри Js файла

// const text = document.createTextNode("Тут был я");

div.classList.add("black");

// document.body.append(div);

// document.querySelector(".wrapper").append(div);

//  wrapper.append(div);   // добавить элемент вначало  /

//  wrapper.prepend(div);   // добавить элемент вконец /
/*
hearts[0].before(div); // перед

hearts[1].after(div); // после

circles[0].remove(); // удалить

hearts[0].replaceWith(circles[0]); // заменить

div.textContent = "Hello"; // работает только с текстом 

div.innerHTML = "Hello world"; // работатает со всеми тегами html и текстами

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");

*/

//  a = a + 1;

// a += 1;

// Рекурсия

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
    // result = x * result;
  }

  return result;
}

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

pow(2, 1); // 2
pow(2, 2); // 4
pow(2, 3); // 8
pow(2, 4); // 16

//

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],

  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],

    semi: {
      students: [
        {
          name: "Test",
          progress: 100,
        },
      ],
    },
  },
};

function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  return total / students;
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }

    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }

    return total;
  }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);

/* 

1. Был объект с двумя свойствами, в одном массив, в другом объект.

2. Проверяем являются ли исходные данные массивом. Нет, это объект. Идем в else.

3. Создаем массив с двумя значениями.

4. Задаем цикл. Обращаемся к объекту. Конкретно к значениям свойств. То есть перебираем массив, который в js и объект в html.

5. Создаем новую переменную, в нее вызов этой же функции, в аргументы поочередно массив и объект из пункта 4. Поочередно, потому что цикл.

6. Данные не знаем, функция заново запускается. В аргументы приходит массив из js. Проверяем на массив, правда. Создаем новую переменную.

7. Запускаем цикл и значения свойства progress приплюсовываем к новой переменной.

8. Возвращаем массив, в котором первое значение суммированный прогресс, второе количество значений, то есть студентов.

9. Эта функция завершилась. Возвращаемся к первому вызову. В переменную subDataArr помещаем массив с 160 и 2. Цикл идет дальше. Вкладываем данные массива в новый массив из блока else.

10. Первый шаг цикла закончился. Теперь второй. Смотрим объект из свойства html. Заново вызываем функцию, передаем этот объект.

11. В первом блоке условия не массив, идем дальше. Обращаемся к значениям свойств html, это basic и pro. Их значения - это массивы. Теперь они в цикле. То есть уже второй уровень цикла. Первый также идет.

12. Вызываем функцию, в нее вкладываем первое значение цикла - значение свойства basic - массив. Первое условие срабатывает. Функция возвращает 38 и два. Возвращаем в первую функцию и второй уровень цикла.

13. В subDataArr возвращается массив с 38 и 2. Следующими двумя шагами он приплюсовывается и возвращает 198 и 4.

14. Следующий шаг второго цикла. Помещаем в вызов функции массив из pro. Значения не знаем, значит опять вызываем функцию.

15. Проверяем на массив, все верно. Задаем новую переменную, в нее прогресс. Возвращаем 10 и 1.

16. Возвращаем в цикл. Функция вернула массив. Приплюсовываем к переменной, получаем массив с 208 и 5. Все циклы завершились, возвращаем переменную.

17. Помещаем вызов в новую функцию, вкладываем основной объект.

18. И затем делим общий прогресс на студентов.













*/
