const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    let obj = {};
    const inputs = formLogin.querySelectorAll('input');
    for (let input of inputs) {
        if (input.value === "") {
            return alert("Заповніть усі поля форми!!!");
        };
        obj[input.name] = input.value;
    }
    console.log(obj)
    formLogin.reset();    
}