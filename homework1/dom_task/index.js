document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  // ваш код поместить тут

  //Создать функцию которая принимает два аргумента. Функция проверяет является ли первый элемент родителям для второго элемента isParent(parent, child) => true || false
  const isParent = (parent, child) => parent === child.parentElement;
  console.log(isParent(document.querySelector('ul'), document.querySelector('li')));
  console.log(isParent(document.querySelector('ul'), document.querySelector('p')));

  // Найти элемент который находится перед списком ul
  console.log(document.querySelector('ul').previousElementSibling);

  // Найти параграф и получить его текстовые содержимое
  console.log(document.querySelector('p').textContent);

  // Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.
  const objectInfo = (obj) => {
    const info = {
      type: obj.nodeType,
      name: obj.nodeName,
      childrens: obj.childNodes.length,
    }
    return info;
  };  
  console.log(objectInfo(document.querySelector('ul')));
  
  // Найти список и добавить ему класс "list"
  document.querySelector('ul').classList.add('list');
});