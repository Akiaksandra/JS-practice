'use strict' 

/*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -новый фильм добавляется в список. Страница не должна перезагружаться.Новый фильм должен добавляться в movieDB.movies.Для получения доступа к значению input - обращаемся к нему как input.value;P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту
 */

function onPageLoaded () {
    const movies = document.querySelector(".movies");
    const emptyListMessage = document.querySelector(".empty-list");
    const addFormInput = document.querySelector(".add-form-input");
    const addFormButton = document.querySelector(".add-form-button");
    const loveFilm = document.querySelector("#checkbox");

    let moviesDB = [];
    
    const toggleEmptyListMessage = () => {
        if (moviesDB.length === 0) {
            emptyListMessage.classList.remove('hidden');
        } else {
            emptyListMessage.classList.add('hidden');
        }
    };
    toggleEmptyListMessage();

    //Считывам localStorage при обновлении страницы
    if (localStorage.getItem('movies')) {
        moviesDB = JSON.parse(localStorage.getItem('movies'));
        displayMovies();
    };

    function updateLocal() {
        localStorage.setItem('movies', JSON.stringify(moviesDB));
    };

    function sortDOM() {
        let arr = Array.from(movies.children)
        .sort((function (a, b) {
            if (a.querySelector('.movies-name').textContent.toLowerCase() > b.querySelector('.movies-name').textContent.toLowerCase()) {
                return 1;
            }
            if (a.querySelector('.movies-name').textContent.toLowerCase() < b.querySelector('.movies-name').textContent.toLowerCase()) {
                return -1;
            }
            return 0}))
        .forEach(function(ele) {
            movies.appendChild(ele);
        });        
    }

    function displayMovies() {
        let codeForItem = '';
        moviesDB.forEach((item) => {
            codeForItem += `
                <li class="movies-item">
                    <span class="movies-name">${item.movie.length > 21 ? item.movie.substring(0,20)+"..." : item.movie}</span>
                    <button class="movies-trash"></button>
                </li>
            `;
            movies.innerHTML = codeForItem;
        });
        moviesDB.sort(function (a, b) {
            if (a.movie.toLowerCase() > b.movie.toLowerCase()) {
              return 1;
            }
            if (a.movie.toLowerCase() < b.movie.toLowerCase()) {
              return -1;
            }
            return 0});
        updateLocal();
        sortDOM();
        addFormInput.value = "";
        toggleEmptyListMessage();
    };

    addFormButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (addFormInput.value.length > 0) {
            let newItem = {
                movie: addFormInput.value,
            }
            moviesDB.push(newItem);
            displayMovies();
            updateLocal();
            if (loveFilm.checked) {
                console.log("Добавляем любимый фильм");
            }
        } else {
            console.log("Введите название фильма!")
        }
    });

    //Удаление в корзину!
    movies.addEventListener('click', (event) => {
        let target = event.target.parentElement
        if (target.tagName === "LI"){
            for (let i = 0; i < moviesDB.length; i++) {
                if (target.querySelector('span').textContent.substring(0, 20) == moviesDB[i].movie.substring(0, 20)) {
                    moviesDB.splice(i, 1);
                    updateLocal();
                    target.remove();
                    toggleEmptyListMessage();
                };
            };
        }; 
    });
};

document.addEventListener("DOMContentLoaded", onPageLoaded);