'use strict'

//Придумать название для переменных, которые описывают (let, const)
const userName = ""; //имя (постоянное)
const userSurname = ""; //фамилия (постоянное)
let userAge; //возраст (может изменяться)
let userInfo; //информация о пользователе ( может изменяться)

//Что будет в консоле и почему:
// 1 
function variables1 () { 
    console.log(test); //- undefined, т.к. переменная объявлена с помощью var, но на момент вызова функции значение ей еще не присвоено
    var test = 'string';
}

//2
function variables2 () { 
    var x = 'string';
    var x = 'string 2';
    console.log(x); // - string 2, т.к. переменная с одним и тем же именем может быть объявлена с помощью var многократно. В данном случае ей присваивается второе значение
}

// 3 
function variables3 () { 
    console.log(test); // - SyntaxError, так как переменная test объявлена ниже вызова функции с помощью let. Т.е. на момент вызова функции данной переменной не существует
    let test = 'string';
}

//4
function variables4 () { 
    const x = 'string';
    const x = 'string 2';
    console.log(x); //- SyntaxError - переменная x уже была инициализирована выше. Повторная инициализация с const невозможна. Переопределить значение переменной, объявленной с const также нельзя
}

//5
function variables5 () { 
    let num = 12;
    let num = 1; 
    console.log(num) //- SyntaxError - переменная num уже была инициализирована выше. Повторная инициализация с let невозможна
}