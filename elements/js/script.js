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
