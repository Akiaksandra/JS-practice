import { tasksItem, newTaskBlock } from './variables';

// Отображение задач по табам
const filterTasks = (status) => {
  // Скрываем неподходящие задачи
  if (status === 'all-task') {
    for (let i = 0; i < tasksItem.length; i += 1) {
      tasksItem[i].classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < tasksItem.length; i += 1) {
      if (!tasksItem[i].classList.contains(status)) {
        tasksItem[i].classList.add('hidden');
      } else {
        tasksItem[i].classList.remove('hidden');
      }
    }
  }
  // Скрываем блок ввода новой задачи на вкладке done
  if (status === 'done-task') {
    newTaskBlock.classList.add('hidden');
  } else {
    newTaskBlock.classList.remove('hidden');
  }
};

export { filterTasks as default };
