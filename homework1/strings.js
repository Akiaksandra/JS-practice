'use strict'

let string = 'string test example';

// Получить первую и последнюю букву строки
const firstLetter = string[0];
const lastLetter = string[string.length - 1];
console.log(`В строке '${string}' первая буква: ${firstLetter}, последняя буква: ${lastLetter}`);

// Сделать первую и последнюю буквы в верхнем регистре
const result = `${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length - 1].toUpperCase()}`;
console.log(`В строке '${result}' первая и последняя буквы теперь большие`);

// Найти положение слова string в строке
let word = 'string';
const findWordIndex = string.indexOf(word);
if(findWordIndex === - 1) {
    console.log(`Слово ${word} НЕ найдено`);
 } else {
    console.log(`Слово ${word} найдено в индексе ${findWordIndex}`);
 }
//ИЛИ (менее читабельно)
//console.log(findWordIndex === - 1 ? `Слово ${word} не найдено` : `Слово ${word} найдено в индексе ${findWordIndex}`);

// Найти положение второго пробела
const secondSpaceIndex = string.indexOf(" ", string.indexOf(" ")+1);
console.log(`Второй пробел располагается под индексом ${secondSpaceIndex}`);

// Получить строку со 2-ого символа длинной 6 букв
const stringFrom2Elem6LettersLength = string.split("").join("").substr(1, 6); //чтобы получить имено буквы, без пробелов
console.log(`Строка со 2 символа длиной 6 букв: ${stringFrom2Elem6LettersLength}`);

// Получить строку с 1 по 7 символ
const stringFrom1ElemTo7Elem = string.slice(0, 6);
console.log(`Строка с 1 символа по 7 (невключительно): ${stringFrom1ElemTo7Elem}`);

// Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' 
let x = 20, 
    y = 21;
const stringFromVariables = String(x) + String(y);  
// ИЛИ
// const stringFromVariables = x.toString() + y.toString();
console.log(`Были переменные x: ${x} и y: ${y}, а стали строкой ${stringFromVariables}`);    