// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const listCategory = document.querySelectorAll(".item");
console.log("Number of categories:", listCategory.length);


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const animalsTitle = document.querySelector(".categories_title-animals");
console.log("Category:", animalsTitle.textContent);


const animals = document.querySelector('.categories_animals');
const listAnimals = animals.querySelectorAll(".categories_kind");
console.log("Elements:", listAnimals.length);

const productsTitle = document.querySelector(".categories_title-products");
console.log("Categories:", productsTitle.textContent);

const products = document.querySelector(".categories_products");
const listProducts = products.querySelectorAll(".categories_kind");
console.log("Elements:", listProducts.length);

const technologiesTitle = document.querySelector(".categories_title-technologies");
console.log("Categories:", technologiesTitle.textContent);

const technologies = document.querySelector(".categories_technologies");
const listTechnologies = technologies.querySelectorAll(".categories_kind");
console.log("Elements:", listTechnologies.length);

