import { tasksDB } from './variables';

export default function updateLocal() {
  localStorage.setItem('tasks', JSON.stringify(tasksDB));
}
