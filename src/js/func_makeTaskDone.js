/* eslint-disable no-param-reassign */
import { tasksDB } from './variables';
import updateLocal from './func_updateLocal';
import updateStyles from './func_updateStyles';

const makeTaskDone = (event) => {
  // Если кликнули не по кнопкам, то зачеркиваем дело
  const taskText = event.target.closest('.tasks-item').querySelector('.tasks-item-text');
  // Проверяем, какой кнопке в массиве соотвествует клик
  tasksDB.forEach((item) => {
    if (taskText.textContent === item.task) {
      if (item.isDone) {
        item.isDone = false;
      } else {
        item.isDone = true;
      }
      updateLocal();
      updateStyles();
    }
  });
};

export { makeTaskDone as default };
