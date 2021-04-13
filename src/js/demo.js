/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
  const newTaskText = document.querySelector('.new-task-textarea');
  const newTaskButton = document.querySelector('.new-task-button');
  const tasksList = document.querySelector('.tasks-list');
  // получаю живую коллекцию
  const tasksItem = document.getElementsByClassName('tasks-item');
  const tabsLink = document.querySelectorAll('.tabs-link');
  const customInputSearch = document.querySelector('.custom-input-search');

  const tasksDB = [];

  // Отображение задач
  const displayTasks = () => {
    let code = '';
    tasksDB.forEach((item) => {
      code += `
            <li class="tasks-item active-task">
                    <span class="tasks-item-text">${item.task}</span>
                    <button class="tasks-item-button button-important">MARK IMPORTANT</button>
                    <button class="tasks-item-button button-delete">
                        <svg  class="icon icon-delete" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9844 3.98438V6H5.01562V3.98438H8.48438L9.51562 3H14.4844L15.5156 3.98438H18.9844ZM6 18.9844V6.98438H18V18.9844C18 19.5156 17.7969 19.9844 17.3906 20.3906C16.9844 20.7969 16.5156 21 15.9844 21H8.01562C7.48438 21 7.01562 20.7969 6.60938 20.3906C6.20312 19.9844 6 19.5156 6 18.9844Z" fill="#666666"/>
                        </svg>
                    </button>
                </li>
            `;
    });
    tasksList.innerHTML = code;
    updateStyles();
  };
  // Считывам localStorage при обновлении страницы
  if (localStorage.getItem('tasks')) {
    // Добавляем все данные из localStaroge в наш массив
    tasksDB.push(...JSON.parse(localStorage.getItem('tasks')));
    // Отображаем имеющиеся данные
    displayTasks();
  }
  function updateLocal() {
    localStorage.setItem('tasks', JSON.stringify(tasksDB));
  }
  // Добавление задачи
  const clickNewTask = (event) => {
    event.preventDefault();
    if (newTaskText.value.trim()) {
      // создаем новый объект
      const newItem = {
        task: newTaskText.value,
        isDone: false,
        isImportant: false,
      };
      // Добавляем его в наш массив
      tasksDB.push(newItem);
      // Обновляем localStorage
      updateLocal();
      // Вызываем функцию, которая покажет данные на странице
      displayTasks();
      // Очищаем поле ввода
      newTaskText.value = '';
    } else {
      // eslint-disable-next-line no-alert
      alert('Введите задачу');
    }
  };
    // Нажатие на кнопку Добавить задачу
  newTaskButton.addEventListener('click', clickNewTask);
  // Нажатие на enter при вводе
  newTaskText.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      clickNewTask(event);
    }
  });
  // Отслеживание клика по кнопке УДАЛИТЬ
  tasksList.addEventListener('click', (event) => {
    const target = event.target.closest('.button-delete');
    // если мы кликнули по элементу - кнопка удалить
    if (target) {
      // В цикле проверяем, по какому элементу кликнули
      for (let i = 0; i < tasksDB.length; i += 1) {
        if (event.target.closest('LI').querySelector('span').textContent === tasksDB[i].task) {
          // И вырезаем этот элемент из массива
          tasksDB.splice(i, 1);
          // Обновляем локальную базу
          updateLocal();
          // Удаляем из верстки
          event.target.closest('LI').remove();
        }
      }
    }
  });
  // Клики по табам
  tabsLink.forEach((item) => {
    item.addEventListener('click', () => {
      for (let i = 0; i < tabsLink.length; i += 1) {
        // Проверим, по какой именно ссылке кликнули
        if (item.dataset.id === tabsLink[i].dataset.id) {
          // Добавим ей класс
          tabsLink[i].classList.add('tabs-link__active');
          filterTasks(`${item.dataset.id}-task`);
        } else {
          // У остальных удалим
          tabsLink[i].classList.remove('tabs-link__active');
        }
      }
    });
  });
  // Отображение задач по табам
  const filterTasks = (status) => {
    if (status === 'all-task') {
      for (let i = 0; i < tasksItem.length; i += 1) {
        tasksItem[i].classList.remove('hidden');
      }
    } else {
      for (let i = 0; i < tasksItem.length; i += 1) {
        if (!tasksItem[i].classList.contains(status)) {
          tasksItem[i].classList.add('hidden');
        } else {
          tasksItem[i].classList.remove('hidden');
        }
      }
    }
  };
  // Сделать важным
  tasksList.addEventListener('click', (event) => {
    const target = event.target.closest('.button-important');
    if (target) {
      const taskItem = event.target.closest('.tasks-item');
      const taskText = taskItem.querySelector('.tasks-item-text');
      // если мы кликнули по элементу - кнопка Сделать важным
      for (let i = 0; i < tasksDB.length; i += 1) {
        if (taskText.textContent === tasksDB[i].task) {
          if (tasksDB[i].isImportant) {
            tasksDB[i].isImportant = false;
          } else {
            tasksDB[i].isImportant = true;
          }
          updateLocal();
          updateStyles();
        }
      }
    }
  });
  // Отметить завершенным дело
  tasksList.addEventListener('click', (event) => {
    // Если кликнули не по кнопкам, то зачеркиваем дело
    if (!event.target.closest('.button-important') && !event.target.closest('.button-delete')) {
      const taskItem = event.target.closest('.tasks-item');
      const taskText = taskItem.querySelector('.tasks-item-text');
      // Проверяем, какой кнопке в массиве соотвествует клик
      for (let i = 0; i < tasksDB.length; i += 1) {
        if (taskText.textContent === tasksDB[i].task) {
          if (tasksDB[i].isDone) {
            tasksDB[i].isDone = false;
          } else {
            tasksDB[i].isDone = true;
          }
          updateLocal();
          updateStyles();
        }
      }
    }
  });
  // Обновить классы на странице в соответствии с LocalStorage
  function updateStyles() {
    for (let i = 0; i < tasksItem.length; i += 1) {
      const taskText = tasksItem[i].querySelector('.tasks-item-text');
      const taskButtonImportant = tasksItem[i].querySelector('.button-important');
      if (tasksDB[i].isImportant) {
        taskText.classList.add('important-task');
        taskButtonImportant.style.backgroundColor = '#BDBDBD';
        taskButtonImportant.textContent = 'NOT IMPORTANT';
      } else {
        taskText.classList.remove('important-task');
        taskButtonImportant.style.backgroundColor = '#27AE60';
        taskButtonImportant.textContent = 'MAKE IMPORTANT';
      }
      if (tasksDB[i].isDone) {
        tasksItem[i].classList.add('done-task');
        tasksItem[i].classList.remove('active-task');
      } else {
        tasksItem[i].classList.remove('done-task');
        tasksItem[i].classList.add('active-task');
      }
    }
  }
  // Поиск задач
  const findTasks = () => {
    const term = customInputSearch.value;
    if (term) {
      // через цикл, чтобы обращаться также к базе данных по индексу
      for (let i = 0; i < tasksDB.length; i += 1) {
        const taskText = tasksDB[i].task.toLowerCase();
        if (taskText.startsWith(term.toLowerCase())) {
          tasksItem[i].classList.remove('hidden-for-search');
        } else {
          tasksItem[i].classList.add('hidden-for-search');
        }
      }
    } else {
      for (let i = 0; i < tasksItem.length; i += 1) {
        tasksItem[i].classList.remove('hidden-for-search');
      }
    }
  };
    // Отслеживание изменение поля поиска
  customInputSearch.addEventListener('input', findTasks);
});
