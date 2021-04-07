'use strict'

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
Array.from(document.querySelector(".promo__adv").getElementsByTagName("img")).forEach((elem) => elem.style.display = "none");
// 2) Изменить жанр фильма, поменять "комедия" на "драма"
document.querySelector(".promo__genre").textContent = "ДРАМА"
// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
document.querySelector(".promo__bg").style.backgroundImage = "url(../img/bg.jpg)";


/*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -новый фильм добавляется в список. Страница не должна перезагружаться.Новый фильм должен добавляться в movieDB.movies.Для получения доступа к значению input - обращаемся к нему как input.value;P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - добавить звездочку"
5) Фильмы должны быть отсортированы по алфавиту
 */

function onPageLoaded () {
    const movies = document.querySelector(".promo__interactive-list");
    const addFormInput = document.querySelector(".adding__input");
    const addFormButton = document.querySelector(".add-form-button");
    const loveFilm = document.querySelector("#checkbox");

    //Массив, в котором будут храниться фильмы
    let moviesDB = [];
    
    //Считывам localStorage при обновлении страницы
    if (localStorage.getItem('movies')) {
        moviesDB = [...JSON.parse(localStorage.getItem('movies'))];
        //Отображаем имеющиеся данные
        displayMovies();
    };
    function updateLocal() {
        localStorage.setItem('movies', JSON.stringify(moviesDB));
    };
    const sortDB = () => {
        //Сортируем массив с данными, чтобы в localStorage элементы шли в таком же порядке
        moviesDB.sort(function (a, b) {
            if (a.movie.toLowerCase() > b.movie.toLowerCase()) {
              return 1;
            }
            if (a.movie.toLowerCase() < b.movie.toLowerCase()) {
              return -1;
            }
            return 0});
        updateLocal();
    }
    function displayMovies() {
        //Отржаем код на странице
        let codeForItem = "";
        moviesDB.forEach((item, index) => {
            //Если фильм любимый, то добавляем звездочку
            if (item.isLove) {
                codeForItem += `
                <li class="promo__interactive-item"><span></span><p>${index+1}. ${item.movie.length > 21 ? item.movie.substring(0,20)+"..." : item.movie}</p>
                    <div class="delete"></div>
                </li>
                `;
            } else {
                codeForItem += `
                <li class="promo__interactive-item"><p>${index+1}. ${item.movie.length > 21 ? item.movie.substring(0,20)+"..." : item.movie}</p>
                    <div class="delete"></div>
                </li>
                `;
            }
            movies.innerHTML = codeForItem;
        });
    };

    //Отслеживание клика по кнопке ДОБАВИТЬ
    addFormButton.addEventListener("click", (event) => {
        event.preventDefault();
        //Проверяем, ввели ли что-то
        if (addFormInput.value.length > 0) {
            //создаем новый объект
            let newItem = {
                movie: addFormInput.value,
                isLove: loveFilm.checked,
            }
            //Добавляем его в наш массив
            moviesDB.push(newItem);
            //Сортируем массив по алфавиту
            sortDB();
            //Вызываем функцию, которая покажет данные на странице
            displayMovies();
            //Очищаем инпут
            addFormInput.value = "";
        } else {
            console.log("Введите название фильма!")
        }
    });

    //Отслеживание клика по кнопке УДАЛИТЬ
    movies.addEventListener('click', (event) => {
        let target = event.target.parentElement
        //если мы кликнули по элементу, родитель которого li, а сам элемент - кнопка, то...
        if (target.tagName === "LI" && event.target.classList.contains("delete")) {
            //В цикле проверяем, по какому элементу кликнули
            for (let i = 0; i < moviesDB.length; i++) {
                if (target.querySelector('p').textContent.substring(3, 23) === moviesDB[i].movie.substring(0, 20)) {
                    //И вырезаем этот элемент из массива
                    moviesDB.splice(i, 1);
                    //Обновляем локальную базу
                    updateLocal();
                    //Меняем верстку
                    displayMovies();
                };
            };
        }; 
    });
};

document.addEventListener("DOMContentLoaded", onPageLoaded);
