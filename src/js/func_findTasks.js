import { customInputSearch, tasksDB, tasksItem } from './variables';

// Поиск задач
const findTasks = () => {
  const term = customInputSearch.value;
  if (term) {
    // через цикл, чтобы обращаться также к базе данных по индексу
    for (let i = 0; i < tasksDB.length; i += 1) {
      const taskText = tasksDB[i].task.toLowerCase();
      if (taskText.startsWith(term.toLowerCase())) {
        tasksItem[i].classList.remove('hidden-for-search');
      } else {
        tasksItem[i].classList.add('hidden-for-search');
      }
    }
  } else {
    for (let i = 0; i < tasksItem.length; i += 1) {
      tasksItem[i].classList.remove('hidden-for-search');
    }
  }
};

export { findTasks as default };
