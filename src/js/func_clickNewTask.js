import { newTaskText, tasksDB } from './variables';
import updateLocal from './func_updateLocal';
import displayTasks from './func_displayTasks';

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
    tasksDB.unshift(newItem);
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

export { clickNewTask as default };
