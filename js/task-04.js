// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = document.getElementById("value");
let buttonInc = document.querySelector('button[data-action="increment"]');
let buttonDec = document.querySelector('button[data-action="decrement"]');
let counter = counterValue.innerHTML;

function incCounter() {
    counter++;
    counterValue.innerHTML = counter;
}
buttonInc.addEventListener('click', incCounter);


function decCounter() {
    counter--;
    counterValue.innerHTML = counter;
}
buttonDec.addEventListener('click', decCounter);




