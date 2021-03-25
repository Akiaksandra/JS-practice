'use strict'

let string = 'string test example';

// Получить первую и последнюю букву строки
let firstLetter = string[0];
let lastLetter = string[string.length - 1];
console.log(`В строке '${string}' первая буква: ${firstLetter}, последняя буква: ${lastLetter}`);

// Сделать первую и последнюю буквы в верхнем регистре
let result = `${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length - 1].toUpperCase()}`;
console.log(`В строке '${result}' первая и последняя буквы теперь большие`);

// Найти положение слова string в строке
let word = 'string';
let findWordIndex = string.indexOf(word);
if(findWordIndex === - 1) {
    console.log(`Слово ${word} НЕ найдено`);
 } else {
    console.log(`Слово ${word} найдено в индексе ${findWordIndex}`);
 }
//ИЛИ (менее читабельно)
//console.log(findWordIndex === - 1 ? `Слово ${word} не найдено` : `Слово ${word} найдено в индексе ${findWordIndex}`);

// Найти положение второго пробела
let secondSpaceIndex = string.indexOf(" ", string.indexOf(" ")+1);
console.log(`Второй пробел располагается под индексом ${secondSpaceIndex}`);

// Получить строку со 2-ого символа длинной 6 букв
let newString = string.split("").join("").substr(1, 6); //чтобы получить имено буквы, без пробелов
console.log(`Строка со 2 символа длиной 6 букв: ${newString}`);

// Получить строку с 1 по 7 символ
let newString2 = string.slice(0, 6);
console.log(`Строка с 1 символа по 7 (невключительно): ${newString2}`);

// Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' 
let x = 20, 
    y = 21;
let z = String(x) + String(y);  
// ИЛИ
// let z = x.toString() + y.toString();
console.log(`Были переменные x: ${x} и y: ${y}, а стали строкой ${z}`);    