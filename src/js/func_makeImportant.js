/* eslint-disable no-param-reassign */
import { tasksDB } from './variables';
import updateLocal from './func_updateLocal';
import updateStyles from './func_updateStyles';

const makeTaskImportant = (event) => {
  const taskText = event.target.closest('.tasks-item').querySelector('.tasks-item-text');
  // если мы кликнули по элементу - кнопка Сделать важным
  tasksDB.forEach((item) => {
    if (taskText.textContent === item.task) {
      if (item.isImportant) {
        item.isImportant = false;
      } else {
        item.isImportant = true;
      }
      updateLocal();
      updateStyles();
    }
  });
};

export { makeTaskImportant as default };
