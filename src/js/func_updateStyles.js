import { tasksItem, tasksDB } from './variables';

// Обновить классы на странице в соответствии с LocalStorage
function updateStyles() {
  for (let i = 0; i < tasksItem.length; i += 1) {
    const taskText = tasksItem[i].querySelector('.tasks-item-text');
    const taskButtonImportant = tasksItem[i].querySelector('.button-important');
    if (tasksDB[i].isImportant) {
      taskText.classList.add('important-task');
      taskButtonImportant.style.backgroundColor = '#BDBDBD';
      taskButtonImportant.textContent = 'NOT IMPORTANT';
    } else {
      taskText.classList.remove('important-task');
      taskButtonImportant.style.backgroundColor = '#27AE60';
      taskButtonImportant.textContent = 'MAKE IMPORTANT';
    }
    if (tasksDB[i].isDone) {
      tasksItem[i].classList.add('done-task');
      tasksItem[i].classList.remove('active-task');
    } else {
      tasksItem[i].classList.remove('done-task');
      tasksItem[i].classList.add('active-task');
    }
  }
}

export { updateStyles as default };
