const refs = {
    name: document.querySelector("#name-input"),
    nameLabel: document.querySelector("#name-output"),
};


refs.name.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;    
    
};

