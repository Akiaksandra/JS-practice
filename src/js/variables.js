const newTaskText = document.querySelector('.new-task-textarea');
const newTaskBlock = document.querySelector('.new-task');
const newTaskButton = document.querySelector('.new-task-button');
const tasksList = document.querySelector('.tasks-list');
// получаю живую коллекцию
const tasksItem = document.getElementsByClassName('tasks-item');
const tabsLink = document.querySelectorAll('.tabs-link');
const customInputSearch = document.querySelector('.custom-input-search');
const tasksDB = [];

export {
  newTaskText, newTaskButton, tasksList, tasksItem, tabsLink, customInputSearch, tasksDB, newTaskBlock,
};
