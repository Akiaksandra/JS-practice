import '../scss/app.scss';
import {
  newTaskText, newTaskButton, tasksList, tabsLink, customInputSearch, tasksDB,
} from './variables';
import displayTasks from './func_displayTasks';
import clickNewTask from './func_clickNewTask';
import clickTabsLink from './func_clickTabsLink';
import makeTaskDoneByKeypress from './func_makeTaskDoneByKeypress';
import findTasks from './func_findTasks';
import findTarget from './func_findTarget';

// Полифил для IE
if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
  // Yes, there really no need for 'Object.defineProperty' here
  NodeList.prototype.forEach = Array.prototype.forEach;
}
// Считываем localStorage при обновлении страницы
if (localStorage.getItem('tasks')) {
  // Добавляем все данные из localStaroge в наш массив
  tasksDB.push(...JSON.parse(localStorage.getItem('tasks')));
  // Отображаем имеющиеся данные
  displayTasks();
}
// Нажатие на кнопку Добавить задачу
newTaskButton.addEventListener('click', clickNewTask);
// Нажатие на enter при вводе
newTaskText.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 && window.screen.width > 768) {
    clickNewTask(event);
  }
});
// Клики по табам
tabsLink.forEach(clickTabsLink);
// Отслеживание клика по задачам
tasksList.addEventListener('click', findTarget);
// Отметить завершенным дело через клавиатуру
tasksList.addEventListener('keypress', makeTaskDoneByKeypress);
// Отслеживание изменение поля поиска
customInputSearch.addEventListener('input', findTasks);
