/*1. Найти хештеги
Необходимо написать функцию, которая принимает один аргумент – строку и возвращает массив хештегов, которые содержатся в строке. Знак решетки (#) необходимо удалить.
Например:
getWords(‘Прохожу курс в компании #senla по #javascript’) – функция должна вернуть [senla, ’ javascript’];*/

const str = '‘Прохожу курс в компании #senla по #javascript';
const deleteHashtag = (str) =>  str.split(" ").filter(word => word.charAt(0) === "#").map(word => word.slice(1));
console.log(deleteHashtag(str));

/*2. Убрать повторяющиеся слова
Необходимо написать функцию, которая принимает один аргумент – массив со списком слов и возвращает строку, которая не содержит повторяющихся слов, и все слова в этой строке приведены к нижнему регистру. Все слова в итоговой строке должны быть разделены запятой и пробелом.
Например:
normalizeWords(['web', 'JavaScript', Senla, 'script', 'programming'])
должна вернуть строку: "web, javascript, script, programming" (все слова в нижнем регистре, разделяются запятой и пробелом, нет повторяющихся слов)
 */

const normalizeWords = (arr) => {
    //Вариант 1
    let lowArr = arr.map(item => item.toLowerCase());

    let result = [...new Set(lowArr)];
    //ИЛИ
    // let result = Array.from(new Set(lowArr));

    //Вариант 2 (менее читабельный)
    // let result = arr.reduce((res, item) => {
    //     let lowItem = item.toLowerCase();
    //     return res.includes(lowItem) ? res : [...res, lowItem];
    // }, []);
    
    return result;
}
console.log(normalizeWords(['WEB', 'web', 'JavaScript', 'script', 'wEb', 'scripT', 'programming']));

/*3. Адресная книга
В этом задании необходимо реализовать функцию, через которую можно управлять телефонной книгой.
Для управления телефонной книгой нужно реализовать три команды:
ADD — добавляет контакт
REMOVE_PHONE — удаляет номер
SHOW — возвращает содержимое телефонной книги
addressBook('ADD Ivan 555-10-01,555-10-03');
addressBook('ADD Ivan 555-10-02');
console.info(addressBook ('SHOW'));
// Вывод:
// ["Ivan: 555-10-01, 555-10-03, 555-10-02"]
addressBook('REMOVE_PHONE 555-10-03');
addressBook('ADD Alex 555-20-01');
addressBook('SHOW');
// Вывод:
// ["Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"]
addressBook('REMOVE_PHONE 555-20-01');
addressBook('SHOW');
// Вывод:
// ["Ivan: 555-10-01, 555-10-02"]
Гарантируется, что функция будет вызываться корректно, только со списком перечисленных команд. Корректность входных данных проверять не нужно.
Имя команды пишется большими буквами, параметры разделяются одним пробелом.
Гарантируется уникальность добавляемых телефонов.
Команда ADD
Добавляет контакт в телефонную книгу со списком телефонов. Телефоны перечисляются через запятую. Если такой контакт существует, то команда пополняет список телефонов контакта.
ADD Name phone1,phone2
Команда REMOVE_PHONE
Удаляет телефон из телефонной книги. Если телефон успешно удалён, то функция должна вернуть true. Если такого телефона в телефонной книге не существует, то возвращается false.
REMOVE_PHONE phone1
Команда SHOW
Возвращает массив контактов с их телефонами. Массив содержит строчки вида: "Имя: Телефон1, Телефон2". Массив должен быть отсортирован по имени контакта. Телефоны идут в порядке добавления их в телефонную книгу. Контакт с пустым списком телефонов не должен возвращаться.
ADD Contact2 phone4,phone3
ADD Contact1 phone1
ADD Contact1 phone2
SHOW
[
	"Contact1: phone1, phone2",
	"Contact2: phone4, phone3"
]
*/
const book = [];

const addressBook = (str) => {
    commands = str.split(" ");
    switch(commands[0]) { //первое слово - команда
        case "ADD":
            contactName = commands[1];// второе слово - имя
            contactPhones = commands[2].split(",");
            if (!(contactName in book)) { //если этого имени нет в книге
                book[contactName] = contactPhones; //создаем такой контакт с номерами
            } else {
                contactPhones.forEach(number => { //если есть, то делаем проверку:
                    if (book[contactName].indexOf(number) === -1) //возвращается -1, если элемент не найден
                    book[contactName].push(number);
                })
                
            }
            break;
        case "REMOVE_PHONE":
            phoneToRemove = commands[1]; 
            for (contactName in book) {
                const index = book[contactName].indexOf(phoneToRemove); //Значение данной переменной будет положительно, если такой номер найден
                if (index >= 0) {
                    book[contactName].splice(index, 1);
                    console.log(true);
                } else {
                    console.log(false);
                }
            }
            break;
        case "SHOW":
            const bookToShow = [];
            for (contactName in book) {
                if (book[contactName].length > 0) {
                    bookToShow.push(`${contactName}: ${book[contactName].join(", ")}`);
                };
            };
            bookToShow.sort();
            console.log(bookToShow);
            break;    
    }
};

//addressBook('ADD Ivan 555-10-01,555-10-03');
addressBook('ADD Ivan 555-10-08,555-10-09');
addressBook("ADD Alex 555-20-01");
addressBook('REMOVE_PHONE 555-20-01');
addressBook("ADD Alex 555-20-01");
addressBook("ADD Alex 555-20-03");
addressBook("SHOW");

