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




