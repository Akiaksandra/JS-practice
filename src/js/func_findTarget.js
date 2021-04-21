import makeTaskImportant from './func_makeImportant';
import makeTaskDone from './func_makeTaskDone';
import deleteTask from './func_deleteTask';

const findTarget = (event) => {
  const buttonImportant = event.target.closest('.button-important');
  const buttonDelete = event.target.closest('.button-delete');
  const taskItem = event.target.closest('.tasks-item');
  // Если кликнули по кнопке УДАЛИТЬ
  if (buttonDelete) {
    deleteTask(event);
  }
  // Если кликнули по кнопке СДЕЛАТЬ ВАЖНЫМ
  if (buttonImportant) {
    makeTaskImportant(event);
  }
  // Если кликнули не по кнопкам, значить СДЛЕАТЬ ЗАВЕРШЕННЫМ
  if (!buttonImportant && !buttonDelete && taskItem) {
    makeTaskDone(event);
  }
};

export { findTarget as default };
