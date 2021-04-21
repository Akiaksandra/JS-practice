import { tasksItem, newTaskBlock } from './variables';

// Отображение задач по табам
const filterTasks = (status) => {
  // Преобразуем живую коллекцию в массив, чтобы использовать методы массивов
  const tasksItemArray = Array.from(tasksItem);
  // Скрываем неподходящие задачи
  if (status === 'all-task') {
    tasksItemArray.forEach((item) => {
      item.classList.remove('hidden');
    });
  } else {
    tasksItemArray.forEach((item) => {
      if (!item.classList.contains(status)) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    });
  }
  // Скрываем блок ввода новой задачи на вкладке done
  if (status === 'done-task') {
    newTaskBlock.classList.add('hidden');
  } else {
    newTaskBlock.classList.remove('hidden');
  }
};

export { filterTasks as default };
