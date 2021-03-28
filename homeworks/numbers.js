// Получить число Pi из Math и округлить его до двух знаков после точки
// унарный + нужен потому, что метод toFixed возвращает строку
const smallPi = +Math.PI.toFixed(2); 
console.log(`Число Pi, окргуленнное до 2 знаков после запятой ${smallPi}`);

// Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
const arr = [10, 17, 5, 12, 15, 99, 1];

//Вариант 1 (самый простой)
const max = Math.max(arr);
const min = Math.min(arr);

//Варинат 2 (через цикл)
// let max = arr[0];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

//Вариант 3 (функция)
// const maxArray = (arr) => arr.reduce((prev, next) => (prev > next ? prev : next));
// const minArray = (arr) => arr.reduce((prev, next) => (prev < next ? prev : next));
// const max = maxArray(arr);
// const min = minArray(arr);

console.log(`Максимальное число из массива = ${max}, минимальное = ${min}`)


// С помощью Math.random:
// получить случайное число и округлить его до двух цифр после запятой
let randomNumFixed = +Math.random().toFixed(2);
console.log(`Случайное число, округлённое до двух цифр после запятой ${randomNumFixed}`);

// получить случайное число от 0 до Х
let x = 10;
let randomNum = Math.floor(Math.random() * (x + 1));
console.log(`Случайное число от 0 до ${x} = ${randomNum}`);

'use strict'
// Получить число из строки '100$'
let fromString = "100$"
const numFromString = parseInt(fromString);
console.log(`Число из строки ${fromString} = ${numFromString}`);


