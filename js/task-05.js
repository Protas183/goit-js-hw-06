const refs = {
    name: document.querySelector("#name-input"),
    nameLabel: document.querySelector("#name-output"),
};

const anonim = "Anonymous";

refs.name.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;  
    if (event.currentTarget.value === "") {
        refs.nameLabel.textContent = anonim;
    }
};

