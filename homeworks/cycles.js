'use strict'
//В ДАННОМ БЛОКЕ ВСЕ ЗАДАНИЯ ОБЕРНУТЫ В ФУНКЦИИ ДЛЯ ИЗОЛЯЦИИ, чтобы все переменные были локальными

//1
// В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
const makeFirstLettersBig = () => {
    let str = "Я стану крутым программистом";
    let wordsFromStr = str.split(' '); // разбили строку на массив слов
    for (let i = 0; i < wordsFromStr.length; i++) {
        wordsFromStr[i] = wordsFromStr[i].slice(0, 1).toUpperCase() + wordsFromStr[i].slice(1); // вырезали первую букву слова, увеличили ее и склеили с оставшимися буквами
    }
    let result = wordsFromStr.join(' '); //сформировали из массива строку 
    console.log(result);

    //ИЛИ через map
    // let str = "Я стану крутым программистом";
    // let wordsFromStr = str.split(' ');
    // let result = wordsFromStr.map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
    // console.log(result);
}
makeFirstLettersBig();

//2
// Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321)
const calculateFactorial = () => {
    let number = 6;
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    console.log(result);
}
calculateFactorial();

//3
// Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
const countdown = () => {
    let start = 1;
    let end = 10;
    let result = "Просветление наступит через: "; 
    for (let i = end; i >= start; i--) {
        if (i !== start) {
            result += ` ${i},`
        } else {
            result += ` ${i}!`;
        }
    };
    console.log(result);
}
countdown();

//4
// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
const displayEvenNumbers = () => {
    let start = 1;
    let end = 20;
    let result = ""; //let result = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            result += ` ${i}`;
            //Или через массив
            //result.push(i);
        };
    };
    console.log(`Нечетные числа в дианазоне от ${start} до ${end}:${result}`);
}
displayEvenNumbers();

//5
// На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы. 
const makeNewString = () => {
    let str = "теперь я мастер циклов javascript";
    let wordsFromStr = str.split(' ');
    for (let i = 0; i < wordsFromStr.length; i++) {
        wordsFromStr[i] = wordsFromStr[i].slice(0, 1).toUpperCase() + wordsFromStr[i].slice(1);
    }
    let result = wordsFromStr.join("");
    console.log(result);
};
makeNewString();

