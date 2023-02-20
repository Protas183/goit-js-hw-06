const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.querySelector("#ingredients");

ingredients.forEach((name) => {
  const liRef = document.createElement('li');
  liRef.classList.add('item');
  liRef.textContent = name;
  ulRef.appendChild(liRef);
});


