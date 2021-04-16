import '../scss/app.scss';
import {
  newTaskText, newTaskButton, tasksList, tabsLink, customInputSearch, tasksDB,
} from './variables';
import displayTasks from './func_displayTasks';
import clickNewTask from './func_clickNewTask';
import deleteTask from './func_deleteTask';
import clickTabsLink from './func_clickTabsLink';
import makeTaskImportant from './func_makeImportant';
import makeTaskDone from './func_makeTaskDone';
import findTasks from './func_findTasks';

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
// Отслеживание клика по кнопке УДАЛИТЬ
tasksList.addEventListener('click', deleteTask);
// Клики по табам
tabsLink.forEach(clickTabsLink);
// Сделать важным
tasksList.addEventListener('click', makeTaskImportant);
// Отметить завершенным дело
tasksList.addEventListener('click', makeTaskDone);
// Отслеживание изменение поля поиска
customInputSearch.addEventListener('input', findTasks);
