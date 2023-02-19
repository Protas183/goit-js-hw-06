const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', validInput);

function validInput() {
    console.log(this.value.length, this.value.length === this.getAttribute('data-length'));
    if (this.value.length == this.getAttribute('data-length')) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
};
