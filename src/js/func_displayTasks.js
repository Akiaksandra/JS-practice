import { tasksList, tasksDB } from './variables';
import updateStyles from './func_updateStyles';

const displayTasks = () => {
  let code = '';
  tasksDB.forEach((item) => {
    code += `
          <li class="tasks-item active-task">
                  <span class="tasks-item-text">${item.task}</span>
                  <button class="tasks-item-button button-important">MARK IMPORTANT</button>
                  <button class="tasks-item-button button-delete">
                      <svg  class="icon icon-delete" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.9844 3.98438V6H5.01562V3.98438H8.48438L9.51562 3H14.4844L15.5156 3.98438H18.9844ZM6 18.9844V6.98438H18V18.9844C18 19.5156 17.7969 19.9844 17.3906 20.3906C16.9844 20.7969 16.5156 21 15.9844 21H8.01562C7.48438 21 7.01562 20.7969 6.60938 20.3906C6.20312 19.9844 6 19.5156 6 18.9844Z" fill="#666666"/>
                      </svg>
                  </button>
              </li>
          `;
  });
  tasksList.innerHTML = code;
  updateStyles();
};
export { displayTasks as default };