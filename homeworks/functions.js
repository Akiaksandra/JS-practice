'use strict'
//1
// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.
const multiply = (...numbers) => numbers.reduce((result, item) => result * item, 1);
console.log(multiply(1, 2, 3, 4));

//2
// С помощью рекурсии вычислить факториал числа 10.
const recurcion = (num) => {
    if (num === 1) {
        return 1;
    } else {
        return num * recurcion(num - 1);
    };
};
console.log(recurcion(6));

//3
// Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.
const revertStr = (str) => str.split("").reverse().join("");
console.log(revertStr('test'));

//4
// Написать функцию, которая проверяет является ли слово палиндромом
const palindromCheck = (str) => {
    let palindrom = str.split("").reverse().join("");
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
//const recurcion6 = (str) => console.log(str.split("").join(" "));
//recurcion6("test");

//7
// Создать две функции и дать им осмысленные названия:
// первая функция принимает массив и callback, возвращая строку из обработанного массива.
const createStringFromArray = 0;
// вторая функция (callback) обрабатывает каждый элемент массива
const handleEachElement = 0;