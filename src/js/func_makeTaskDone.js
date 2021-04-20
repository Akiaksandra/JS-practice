import { tasksDB } from './variables';
import updateLocal from './func_updateLocal';
import updateStyles from './func_updateStyles';

const makeTaskDone = (event) => {
  // Если кликнули не по кнопкам, то зачеркиваем дело
  if (!event.target.closest('.button-important') && !event.target.closest('.button-delete') && event.keyCode === 13) {
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
};

export { makeTaskDone as default };
