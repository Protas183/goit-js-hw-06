// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector("#ingredients");

const listItemPotatoes = document.createElement("li");
listItemPotatoes.textContent = "Potatoes";
listItemPotatoes.classList.add('item');

const listItemMushrooms = document.createElement("li");
listItemMushrooms.textContent = "Mushrooms";
listItemMushrooms.classList.add('item');

const listItemGarlic = document.createElement("li");
listItemGarlic.textContent = "Garlic";
listItemGarlic.classList.add('item');

const listItemTomatos = document.createElement("li");
listItemTomatos.textContent = "Tomatos";
listItemTomatos.classList.add('item');

const listItemHerbs = document.createElement("li");
listItemHerbs.textContent = "Herbs";
listItemHerbs.classList.add('item');

const listItemCondiments = document.createElement("li");
listItemCondiments.textContent = "Condiments";
listItemCondiments.classList.add('item');

list.append(listItemPotatoes, listItemMushrooms, listItemGarlic, listItemTomatos, listItemHerbs, listItemCondiments);
console.log(list);