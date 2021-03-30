'use strict'
//1
// Используя функцию, найти последний элемент массива, не изменяя его.
const findLastElem = (arr) => {
    const lastElem = arr[arr.length - 1];
    return lastElem;
}
let arr1 = [1,3,6];
console.log(`Последний элемент в массиве = ${findLastElem(arr1)}`);

//2
// Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
let arr2 = [1,3,6];
const makeDoubleArr = (arr) => {
    const doubleArr = arr.slice(); // создали копию массива
    for (let i = 0; i < arr.length; i++) doubleArr.push(arr[i]);
    return doubleArr;
    //ИЛИ
    // let doubleArr = [];
    // return  doubleArr.concat(arr2, arr2);
}
console.log(makeDoubleArr(arr2));

//3
// Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
let number = 0;
const createArr = (num) => {
    if (num <= 0) {
        return "Введите число больше 0!";
    };
    const newArr = [];
    for (let i = 1; i <= num; i++) {
        newArr.push(i);
    }
    return(newArr);
}
console.log(createArr(number));

//4
// Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
let arr4_1 = [1, 2, 3];
let arr4_2 = ["x", "y", "z"];
const deleteFirstElem = (...arrays) => {
    for (let arr of arrays) {
        arr.shift();
    }
    return arrays;
}
console.log(deleteFirstElem(arr4_1, arr4_2));

//5
// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").
let str = "екважбигёзд";
const reverseAndSortStr_5 = (str) => str.split("").sort((a, b) => b.localeCompare(a)).join("");
console.log(reverseAndSortStr_5(str));

//6
// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
let arr6 = [5, 2, -1, 6, 9, -9, 3];
const reverseAndSortStr_6 = (arr) => arr.sort((a, b) => b - a);
console.log(reverseAndSortStr_6(arr6));

//7
// Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер. Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.
let arr7 = ['a', 'б', 'в', 'г', 'д', 'е'];
let start = 1;
let end = 3;
const getNewArray = (arr, start, end) => arr.slice(start, end + 1);
console.log(getNewArray(arr7, start, end));

//8
// Удвоить элементы массива, не используя циклы.,
let arr8 = [5, 2, -1, 6, 9, -9, 3];
const newArr8 = arr8.map((val) => val*2);
console.log(newArr8);

//9
// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы. 
let arr9 = [1, 2, 3, 4, 5];
const deleteElems = (arr) => {
    const arrWithout2and3Elems = arr.slice(); //клонируем массив, чтобы не менять иходный
    arrWithout2and3Elems.splice(1, 2);
    return arrWithout2and3Elems;
}
console.log(deleteElems(arr9));

//10
// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
let arr10 = [1, 2, 3, 4, 5];
const deleteAndPaste = (arr) => {
    const arrWithWords = [...arr]; //клонируем массив, чтобы не менять иходный
    arrWithWords.splice(2, 2, 'три', 'четрые');
    return arrWithWords;
}
console.log(deleteAndPaste(arr10));

//11
// Вставить в произвольный массив любое значение после второго элемента.
let arr11 = [1, 2, 3, 4, 5];
const arrWithYes = [...arr11]; //клонируем массив, чтобы не менять иходный
arrWithYes.splice(3, 0, "yes");
console.log(arrWithYes);

//12
// Отсортировать массив массивов таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"
let arr12 = [ [1, 2, 3 ], [ 'y', 'z' ], [1, 2, 3, 4, 5] ];
arr12.sort((a, b) => a.length - b.length);
console.log(arr12);

//13
// Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}}, ]
let arr13 = [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}} ];

arr13.sort((a, b) => a.info.legs - b.info.legs);
console.log(arr13);

//14
//Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ]. Например, filterServices(services, 20, 60).
let arr14 = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42} ];
const filterServices = (arr, start, end) => {
    const newArr14 = arr.filter(value => value.executionTime >= start && value.executionTime <= end);
    newArr14.sort((a, b) => a.executionTime - b.executionTime);
    return newArr14;
}    
console.log(filterServices(arr14, 20, 60));
