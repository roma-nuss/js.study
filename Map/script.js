const user = {
  name: "Alex",
  surname: "smith",
  birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};
// entries создает из {}  масив с масивами
const userMap = new Map(Object.entries(user));
console.log(userMap);
// fromEntries создает из [] подобного {} создает реальный {}
const newUserObject = Object.fromEntries(userMap);

console.log(typeof Object.keys(user)[0]);

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 15000, 25000];

const map = new Map([[{ paper: 400 }, 8000]]);

// использовать forEach на много рациональнее и быстрее чем записывать к каждому поочередно

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

map.set(shops[0], 5000);
map.set(shops[1], 15000);
map.set(shops[2], 25000);

console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
map.delete(key);
map.clear();
map.size;
map.keys();

console.log(map.keys());

const goods = [];

// for (let shop of map.keys()) {
//   console.log(shop);
// }
// получаем ключи
for (let shop of map.keys()) {
  goods.push(Object.keys(shop)[0]);
}

console.log(goods);

// получаем значение
for (let price of map.values()) {
  console.log(price);
}
// получаем и то и другое
for (let price of map.entries()) {
  console.log(price);
}

for (let [shop, price] of map.entries()) {
  console.log(price, shop);
}

map.forEach((value, key, map) => {
  console.log(key, value);
});

// Главное отличие map от {}
/*
1. У map ключи могут быть чем угодно [] {} function и тд , у {} могут быть только строки
2. Порядок свойств в картах всегда такой в каком мы их добавляли , у {} нет четкого порядка в зависимости от того когда свойство было добавленно 
3. При создании пустой map в ней ничего не будет содержаться, даже наследуемые свойста через прототип, а в пустом {} они будут содержаться
4. map легко перебирать , {} не так уж и легко
5. Размер map легко получить через свойство size(), а в {} его сначала нужно трансформировать в [] и только потом получить его длину 




*/

// map => это масив масивов
// map это иттерируамый обьект
