'use strict'
//Знак + используем, чтобы ответ был записан в переменную как число
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
   count : numberOfFilms,
   movies : {},
   actors : {},
   genres : [],
   privat: false,
};

const rememberTheLastMovie = () => {
   for (let i = 0; i < 2; i++) {
      let movieTitle = prompt("Один из последних просмотренных фильмов");
      let movieScore = +prompt("На сколько оцените его?");
      if (movieTitle !== "" && movieScore!=="" && movieTitle != null && movieScore != null && movieTitle.length < 50) {
         //Обращаюсь к свойству объекта personalMovieDB - movies, которое также представляет собой объект. Записываю в него новую пару ключ-значение
         personalMovieDB.movies[movieTitle] = movieScore;
      } else {
         //Делаем дополнительный проход цикла
         i--;
      };
   };
};
rememberTheLastMovie();

const checkLevelForCinema = () => {
   if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count < 30) {
      alert("Вы классический зритель");
   } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
   } else {
      alert("Произшла ошибка");
   }
};
checkLevelForCinema();

const writeYourGenres = () => {
   for (let i = 1; i <= 3; i++) {
      let genres = prompt(`Ваш любимый жанр под номером ${i}`);
      //Обращаемся к свойству объекта personalMovieDB - genres, которое представляет собой массив. Записываем в него новые элементы массива
      personalMovieDB.genres[i-1] = genres;
   };
};
writeYourGenres();

const showMyDB = () => {
   if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
   }
};
showMyDB();
