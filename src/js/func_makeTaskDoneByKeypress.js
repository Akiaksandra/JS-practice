import makeTaskDone from './func_makeTaskDone';

// Данная функция создана для дополнительной проверки.
// Так как для отслеживания событий на задачах используется делегирование, корректно использовать обработчик keypress не представляется возможным
const makeTaskDoneByKeypress = (event) => {
  const buttonImportant = event.target.closest('.button-important');
  const buttonDelete = event.target.closest('.button-delete');
  const taskItem = event.target.closest('.tasks-item');
  // Если нажали не на кнопки
  if (!buttonImportant && !buttonDelete && taskItem) {
    // И нажали на enter
    if (event.keyCode === 13) {
      makeTaskDone(event);
    }
  }
};

export { makeTaskDoneByKeypress as default };
