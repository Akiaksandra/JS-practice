import { tabsLink } from './variables';
import filterTasks from './func_filterTasks';

const clickTabsLink = (item) => {
  item.addEventListener('click', () => {
    for (let i = 0; i < tabsLink.length; i += 1) {
    // Проверим, по какой именно ссылке кликнули
      if (item.dataset.id === tabsLink[i].dataset.id) {
      // Добавим ей класс
        tabsLink[i].classList.add('tabs-link__active');
        filterTasks(`${item.dataset.id}-task`);
      } else {
      // У остальных удалим
        tabsLink[i].classList.remove('tabs-link__active');
      }
    }
  });
};

export { clickTabsLink as default };
