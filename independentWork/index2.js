'use strict'

/*1. Проверка времени на корректность
В этом задании необходимо проверить, что числа составляют корректное время. Необходимо реализовать функцию, первым аргументом в которую передается количество часов в 24-часовом формате, вторым – количество минут. Функция должна вернуть логическое значение true или false, что будет означать корректность времени.
Например:
isTimeValid(14, 43); должна вернуть true
isTimeValid(32, 43); должна вернуть false
 */

const checkTime = (hours, minutes) => (hours >=0 && hours <= 24 && minutes >= 0 && minutes < 60);

/*2. Добавление минут ко времени.
В этом задании необходимо реализовать функцию, которая увеличивает время на заданное количество минут.Первым аргументом в функцию передается количество часов в 24-часовом формате, вторым – количество минут, третьим – произвольное количество минут, которое необходимо добавить к указанному времени.
Например:
addMinutes(12, 25, 30); должна вернуть строку со значением 12:55
addMinutes(23, 40, 83); должна вернуть строку со значением 01:03
 */

const increaseTime = (hours, minutes, addMinutes) => {
   let newMinutes = (minutes + addMinutes) % 60;
   let newHours = (hours + Math.floor((minutes + addMinutes)/60)) % 24;
   return `${newHours}:${newMinutes}`;
}

// console.log(increaseTime(22, 55, 15));
// console.log(increaseTime(23, 55, 15));

/*3. Определение поры года
Необходимо реализовать функцию, которая вернет название поры года в виде строки. Функция принимает один аргумент – номер месяца.
Например:
getSeason(1); должна вернуть строку со значением Зима
getSeason(7); должна вернуть строку со значением Лето
 */

const checkSeason = (numOfMonth) => {
   switch (true) {
      case (numOfMonth === 12 || (numOfMonth >= 1 && numOfMonth <= 2)):
         console.log("Зима");
         break;
      case (numOfMonth >= 3 && numOfMonth <= 5): 
         console.log("Весна");
         break;
      case (numOfMonth >= 6 && numOfMonth <= 8): 
         console.log("Лето");
         break;  
      case (numOfMonth >= 9 && numOfMonth <= 11): 
         console.log("Осень");
         break;   
      default:
         console.log("В году всего 12 месяцев!");   
   }
   /*ВТОРОЙ ВАРИАНТ (более читабельный на мой взгляд)
      switch (numOfMonth) {
         case 12:
         case 1:
         case 2:
            console.log("Зима");
            break;
         case 3:
         case 4:
         case 5:
            console.log("Весна");
            break; 
         case 6:
         case 7:
         case 8:
            console.log("Лето");
            break;   
         case 9:
         case 10:
         case 11:
            console.log("Осень");
            break;  
         default:
            console.log("В году всего 12 месяцев!")ж     
      }
   */
};

// checkSeason(12);
// checkSeason(1);
// checkSeason(5);
// checkSeason(9);
// checkSeason(0);

/*4. Склонения слова «День»
Необходимо реализовать функцию, которая вернет верное склонение слова «День» виде строки. Функция принимает один аргумент – количество дней.
Например:
getDayDeclension(2); должна вернуть строку со значением Дня
getDayDeclension(1); должна вернуть строку со значением День
getDayDeclension(7); должна вернуть строку со значением Дней
 */

const inclineWord  = (numOfDays) => {
   switch (true) {
      case (numOfDays === 1) :
         return `${numOfDays} День`;
         break;
      case (numOfDays >= 2 && numOfDays <= 4) :
         return `${numOfDays} Дня`;
         break;   
      case (numOfDays === 0 || numOfDays >= 5) :
         return `${numOfDays} Дней`;
         break;   
      default: 
         return "Ошибка";
   };
};

// console.log(inclineWord(1));
// console.log(inclineWord(4));
// console.log(inclineWord(25));
// console.log(inclineWord(0));
// console.log(inclineWord(-5));

/*5. В поисках суммы.
Необходимо реализовать функцию, которая вернет числовое значение суммы в зависимости от введенного аргумента. Функция принимает один аргумент – положительное целое число.
Например:
getSumm(6); должна вывести 21
Алгоритм расчета суммы: getSumm(6) –> 1+2+3+4+5+6
 */

const getSum = (num) => {
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum+=i;
   }
   return sum;
   //Через рекурсию 
   // return num === 1 & 1 : num + getSum(num-1);
   
};

//console.log(getSum(6));

/*6. Таблица умножения.
Необходимо реализовать функцию, которая выведет в консоль таблицу умножения до 10. Функция принимает один аргумент – число, и должна вывести в консоль таблицу умножения для этого числа.
Например:
getMultiplicationTable(178); функция должна вывести в консоль:
178 * 1 = 178
178 * 2 = 356
178 * 3 = 534
178 * 4 = 712
178 * 5 = 890
178 * 6 = 1068
178 * 7 = 1246
178 * 8 = 1424
178 * 9 = 1602
178 * 10 = 1780
 */

const getMultiplicationTable = (num) => {
   for (let i = 1; i <= 10; i++) {
      console.log(`${num} * ${i} = ${num*i}`);
   }
}

//getMultiplicationTable(178);

/*7. Попадание в цель.
Необходимо реализовать две функции, которые определяют, попадает ли точка внутрь графика (одна функция для окружности, вторая – для четырехугольника). Функции возвращают логическое значение (true или false). Функции принимают два аргумента: первый – х-координата точки, второй – у-координата точки.
Например:
isPointInCircle(3, 5); должна вернуть логическое значение true
isPointInCircle(0, 0); должна вернуть логическое значение false
Если точка на границе окружности – считаем что она попадает в окружность. Например: isPointInCircle(3, 1); должна вернуть логическое значение true.
То же необходимо сделать и для четырехугольника.
 */
const isPointInCircle = () => {
   let x0 = +prompt("Введите координату х0: ");
   let y0 = +prompt("Введите координату y0: ");
   let x = +prompt("Введите координату x: ");
   let y = +prompt("Введите координату y: ");
   let R = +prompt("Введите радиус R: ");

   const isPointInCircle = () => {
      return (x - x0)**2 + (y - y0)**2; 
   }
   let circle = isPointInCircle();
   if (circle <= R**2) {
      alert `Точка с кординатами x = ${x}, y = ${y} попадает в окружность с центорм x0 = ${x0}, y0 = ${y0} и радиусом ${R}`
   }  else {
      alert `Точка с кординатами x = ${x}, y = ${y} НЕ попадает в окружность с центорм x0 = ${x0}, y0 = ${y0} и радиусом ${R}`
      }
}

//console.log(isPointInCircle());

