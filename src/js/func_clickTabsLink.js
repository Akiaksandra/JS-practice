import { tabsLink } from './variables';
import filterTasks from './func_filterTasks';

const clickTabsLink = (item) => {
  item.addEventListener('click', () => {
    tabsLink.forEach((link) => {
      // Проверим, по какой именно ссылке кликнули
      if (item.dataset.id === link.dataset.id) {
        // Добавим ей класс
        link.classList.add('tabs-link__active');
        filterTasks(`${item.dataset.id}-task`);
      } else {
        // У остальных удалим
        link.classList.remove('tabs-link__active');
      }
    });
  });
};

export { clickTabsLink as default };
