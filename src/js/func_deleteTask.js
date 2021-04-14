import { tasksDB } from './variables';
import updateLocal from './func_updateLocal';

const deleteTask = (event) => {
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
};

export { deleteTask as default };
