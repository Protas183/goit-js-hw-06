let counterValue = document.getElementById("value");
let buttonInc = document.querySelector('button[data-action="increment"]');
let buttonDec = document.querySelector('button[data-action="decrement"]');
let counter = counterValue.innerHTML;

buttonInc.addEventListener('click', incCounter);
function incCounter() {
    counter++;
    counterValue.innerHTML = counter;
}

buttonDec.addEventListener('click', decCounter);
function decCounter() {
    counter--;
    counterValue.innerHTML = counter;
}





