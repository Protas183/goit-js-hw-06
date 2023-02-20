function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');
 
create.addEventListener('click', getAmount);
 
function getAmount() {
  const amount = Number(input.value);
  createBoxes(amount);
};


function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.append(box);
    size += 10;
  }
}

destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

