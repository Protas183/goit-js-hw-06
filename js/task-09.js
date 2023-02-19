function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body')
const color = document.querySelector('span.color')
const button = document.querySelector('button.change-color')


button.addEventListener('click', e => {
  let colorName = getRandomHexColor();
  body.style.backgroundColor = colorName;
  color.textContent = colorName;
})

