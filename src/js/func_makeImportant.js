import { tasksDB } from './variables';
import updateLocal from './func_updateLocal';
import updateStyles from './func_updateStyles';

const makeTaskImportant = (event) => {
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
};

export { makeTaskImportant as default };
