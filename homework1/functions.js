'use strict'
//1
// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.
//const multiplay = (...numbers) => numbers.reduce((result, item) => result * item, 1);
//ИЛИ через arguments
function multiplay() {
    if (arguments.length > 0) {
        let result = 1;
        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i];
        }
        return result;
    } else {
        return 0;
    }
};

console.log(multiplay(1, 2, 3, 4));


//2
// С помощью рекурсии вычислить факториал числа 10.
const recurcionNum = (num) => { //num === 1 ? 1 : num * recurcionNum(num - 1)
    if (num === 1) {
        return 1;
    } else {
        return num * recurcionNum(num - 1);
    };
    
};
console.log(recurcionNum(6));

//3
// Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.
const revertStr = (str) => str.split("").reverse().join("");
console.log(revertStr('test'));

//4
// Написать функцию, которая проверяет является ли слово палиндромом
const palindromCheck = (str) => {
    const palindrom = str.split("").reverse().join("");
    return str === palindrom;
};
console.log(palindromCheck('tet'));

//5
// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")
const replaceWithUnicode = (str) => {
    return str.split("").map(element => element.charCodeAt()).join(" ");
}
console.log(replaceWithUnicode('hello'));

//6
// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'
const recurcionStr = (str) => {
    //str.split("").reverse().join("");
    if (str.length === 0) {
       return "";
    } else {
        console.log(str[0]);
        recurcionStr(str.substring(1));
    } 
};
recurcionStr("hello");

//7
// Создать две функции и дать им осмысленные названия:
// первая функция принимает массив и callback, возвращая строку из обработанного массива.
const createStringFromArray = (arr, func) => func(arr);
// вторая функция (callback) обрабатывает каждый элемент массива
const handleEachElement = (arr, func) => arr.forEach(func);
