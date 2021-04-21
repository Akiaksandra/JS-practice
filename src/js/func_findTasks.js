import { customInputSearch, tasksDB, tasksItem } from './variables';

// Поиск задач
const findTasks = () => {
  const term = customInputSearch.value;
  if (term) {
    tasksDB.forEach((item, index) => {
      const taskText = item.task.toLowerCase();
      if (taskText.startsWith(term.toLowerCase())) {
        tasksItem[index].classList.remove('hidden-for-search');
      } else {
        tasksItem[index].classList.add('hidden-for-search');
      }
    });
  } else {
    tasksDB.forEach((item, index) => {
      tasksItem[index].classList.remove('hidden-for-search');
    });
  }
};

export { findTasks as default };
