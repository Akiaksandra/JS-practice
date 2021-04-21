import { tasksItem, tasksDB } from './variables';

// Обновить классы на странице в соответствии с LocalStorage
function updateStyles() {
  // Преобразуем живую коллекцию в массив, чтобы использовать методы массивов
  const tasksItemArray = Array.from(tasksItem);
  tasksItemArray.forEach((item, index) => {
    const taskText = item.querySelector('.tasks-item-text');
    const taskButtonImportant = item.querySelector('.button-important');
    if (tasksDB[index].isImportant) {
      taskText.classList.add('important-task');
      taskButtonImportant.style.backgroundColor = '#BDBDBD';
      taskButtonImportant.textContent = 'NOT IMPORTANT';
    } else {
      taskText.classList.remove('important-task');
      taskButtonImportant.style.backgroundColor = '#27AE60';
      taskButtonImportant.textContent = 'MARK IMPORTANT';
    }
    if (tasksDB[index].isDone) {
      item.classList.add('done-task');
      item.classList.remove('active-task');
    } else {
      item.classList.remove('done-task');
      item.classList.add('active-task');
    }
  });
}

export { updateStyles as default };
