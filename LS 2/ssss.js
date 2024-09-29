const btn = document.querySelector("button"),
  overlay = document.querySelector(".overlay"),
  btns = document.querySelectorAll("button");

// btn.addEventListener("click", () => {
//   alert("click");
// });

// btn.addEventListener("click", (event) => {
//   alert(" Second click");
// });

// btn.addEventListener("mouseenter", (event) => {
//   console.log(event.target);
//   event.target.remove();
// });

// btn.addEventListener("click", (event) => {
//   console.log(event.target);
//   event.target.remove();
// });
// let i = 0;
// const deleteElement = (event) => {
//   event.target.remove();
// };

let i = 0;
const deleteElement = (event) => {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener("click", deleteElement);
  // }
};

btn.addEventListener("click", deleteElement);
overlay.addEventListener("click", deleteElement);
// btn.removeEventListener("click", deleteElement);

const link = document.querySelector("a");

link.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event.target);
});

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement);
});
