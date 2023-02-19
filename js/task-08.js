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

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

