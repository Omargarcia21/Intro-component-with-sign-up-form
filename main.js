// Seleccionamos los inputs del DOM
const firstName = document.getElementById('fisrtNameInput');
const lastName = document.getElementById('lastNameInput');
const emailAddress = document.getElementById('emailInput');
const password = document.getElementById('passInput');

//Seleccionamos los div de error del DOM
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailAddressError = document.getElementById('emailError');
const passwordError = document.getElementById('passError');

const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'El nombre no debe de estar vacío');
    validateEmpty(lastName.value, lastName, lastNameError, 'El apellido no debe de estar vacio');
    validateEmail(emailAddress.value, emailAddress, emailAddressError);
    validateEmpty(password.value, password, passwordError, 'La contraseña no debe de estar vacía');
});


function validateEmail(valueInput, divInput, divError){
    const expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(expReg.test(valueInput)) {
        hideError(divInput, divError);
    }else {
        showError(divInput, divError,'Parece que este no es un correo valido' )
    }
};

function validateEmpty(valueInput, divInput, divError, nameInput){
    if (valueInput.length == 0){
        showError(divInput, divError, `${nameInput} `);
    }else{
        hideError(divInput, divError);
    }
};

function showError(divInput, divError, error){
    divInput.style.border = '1px solid hsl(0, 100%, 74%)';
    divError.innerHTML = `
    <img class="icon-error" src="images/icon-error.svg" alt="icono error">
            <p class="error">${error}.</p>
    `
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = '';
}