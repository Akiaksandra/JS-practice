import { tasksDB } from './variables';
import updateLocal from './func_updateLocal';

const deleteTask = (event) => {
  // В цикле проверяем, по какому элементу кликнули
  tasksDB.forEach((item, index) => {
    if (event.target.closest('LI').querySelector('span').textContent === item.task) {
      // И вырезаем этот элемент из массива
      tasksDB.splice(index, 1);
      // Обновляем локальную базу
      updateLocal();
      // Удаляем из верстки
      event.target.closest('LI').remove();
    }
  });
};

export { deleteTask as default };
