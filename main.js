// დავალება 1

let number = 153;

let reminder = number % 2;

if (reminder == 0) {
  console.log(`${number} is even,false`);
} else {
  console.log(`${number} is odd,true`);
}
console.log("work number 2");
// დავალება 2

let rectangle = {
  width: 2,
  height: 3,
};

function area(rect) {
  return rect.width * rect.height;
}

function perimeter(rect) {
  return rect.width * 2 + rect.height * 2;
}

area(rectangle);
perimeter(rectangle);

console.log(area(rectangle));
console.log(perimeter(rectangle));

console.log("work number 3");
// დავალება 3

let square = {
  height: 6,
};

function perimeter(square) {
  return square.height + square.height;
}

perimeter(square);

console.log(perimeter(square));
console.log("work number 4");

// დავალება 4
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(2));

console.log(Math.floor(5.95));
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// getRandomInt
function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomNum(101));
console.log("work number 5");
// დავალება 5

const getCurrencySymbolFromCode = (number, currency, lang = undefined) =>
Intl.NumberFormat(lang, { style: "currency", currency }).format(number);
const result = getCurrencySymbolFromCode(120.44, "EUR");
console.log(result);
console.log("work number 6");
// დავალება 6
function logsmalestage() {}

let name = "tea";
let age = 20;
let userName = "giorgi";
let userAge = 28;
let name2 = "sofo";
let age2 = 21;
let userName1 = "mari";
let userAge1 = 25;
let name1 = "sali";
let age1 = 30;
let userName3 = "sandro";
let userAge3 = 18;

function logsmalestage(name, age) {
  console.log(`smallest member is ${userName3}, he is ${userAge3} years old`);
}
console.log(logsmalestage(name, age));
