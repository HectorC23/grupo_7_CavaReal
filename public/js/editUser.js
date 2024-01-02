window.addEventListener('load', () => {
    
    const form = document.querySelector('#form-edit-user');
    //VALIDACIONES
    let pErrors = document.querySelector('.msg-errors-all');

    let userName = document.querySelector('#userName');
    const originalUserName = userName.value;

    let phone = document.querySelector('#phone');
    let password = document.querySelector('#password');
    let passwordConfirmation = document.querySelector('#passwordConfirmation');
    let image = document.querySelector('#img');

    let campos = [userName,phone,password,passwordConfirmation,image];

    campos.forEach(campo => {
        campo.addEventListener('input', () => {

            console.log(campo.name);
            validarCampo(campo, originalUserName);
            
        })
    });

    form.addEventListener('submit', (e) => {

       pErrors.innerHTML = '';
        let cantidadVacios = 0;

            campos.forEach(campo => {

                console.log(campo.name);

                if( validator.isEmpty(campo.value) && campo.name != 'image'){
                    isInvalid(campo);
                    cantidadVacios++;
                }

                console.log(cantidadVacios);
            });

    if(cantidadVacios>0){
            pErrors.classList.add('alert-warning');
            e.preventDefault();
            pErrors.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Campos obligatorios no pueden estar vacios`;
    }
    else{
        alert('Usuario modificado correctamente');
    } 
})

})

function isValid(campo){
    document.querySelector(`label[for="${campo.id}"]`).style.backgroundColor = '#629677'; 
}

function isInvalid(campo){
    document.querySelector(`label[for="${campo.id}"]`).style.backgroundColor = '#93434f';
}

function removeValidation(campo){
    document.querySelector(`label[for="${campo.id}"]`).style.backgroundColor = '#333333';
}

async function validarCampo(campo, originalUserName) {
        console.log(originalUserName);
    removeValidation(campo);

    if (validator.isEmpty(campo.value) && campo.name != 'image') {

        isInvalid(campo);
        mostrarMensajeError(campo, `El campo no puede estar vacio`);

    } else {
        removeValidation(campo);
        limpiarErrores(campo);

        isValid(campo)

         if(campo.name === 'userName'){

            if(campo.value != originalUserName){
            let response = await fetch(`http://localhost:3030/check-user?user=${campo.value}`);
            let result = await response.json();


            console.log(result);
            if(!validator.isLength(campo.value.trim(),{min: 3})){
                mostrarMensajeError(campo, `Debe tener minimo 3 caracteres`);
            }else if (result.exists) {
                mostrarMensajeError(campo, `El nombre de Usuario ya esta en uso`);
            }else{
                isValid(campo);
            }}
        } 

        if(campo.name === 'phone'){
            if(!isMobilePhone(campo.value)){
                mostrarMensajeError(campo, `El telefono debe tener un formato valido`);
            }else{
                isValid(campo);
            }
        }
        
        if(campo.name == 'password'){
            const opciones = {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1
            };

            const esContraseñaFuerte = validator.isStrongPassword(campo.value, opciones);

            if (!esContraseñaFuerte) {
                if (campo.value.length < opciones.minLength) {
                    mostrarMensajeError(campo, `El campo ${campo.name} debe tener minimo ${opciones.minLength} caracteres`);
                }
                if (!/[a-z]/.test(campo.value)) {
                    mostrarMensajeError(campo, `El campo ${campo.name} debe tener al menos 1 minúscula`);
                }
                if (!/[A-Z]/.test(campo.value)) {
                    mostrarMensajeError(campo, `El campo ${campo.name} debe tener al menos 1 mayúscula`);
                }
                if (!/\d/.test(campo.value)) {
                    mostrarMensajeError(campo, `El campo ${campo.name} debe tener al menos 1 número`);
                }
            }else{
                isValid(campo);
            }
        }
        
        if(campo.name == 'passwordConfirmation'){ 
            if(campo.value !== password.value){
                mostrarMensajeError(campo, `Las contraseñas no coinciden`);
            }else{
                isValid(campo);
            }
        }

        if(campo.name == 'image'){
            console.log(campo.value);
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            const filePath = campo.value;
            const fileExtension = filePath.split('.').pop().toLowerCase();

            if(!allowedExtensions.includes(fileExtension)){
                mostrarMensajeError(campo, `Tipo de imagen no valido. Permitidas: jpg, jpeg, png, gif.`);
            }
            console.log(fileExtension);
        }
}
}

function mostrarMensajeError(campo, mensaje) {
    let div = campo.parentNode;
    let mensajeError = div.querySelector('.mensaje-error');

    if (!mensajeError) {
        mensajeError = document.createElement('p');
        mensajeError.classList.add('mensaje-error');
        div.appendChild(mensajeError);
    }

    mensajeError.innerHTML = `<small>${mensaje}</small>`;
    mensajeError.classList.add('alert-warning');
    isInvalid(campo);
}

function limpiarErrores(campo) {
    let div = campo.parentNode;

    let mensajeError = div.querySelector('.mensaje-error');
    if (mensajeError) {
        mensajeError.remove();
    }

    removeValidation(campo);
}

function isMobilePhone(cadena) {
    const formato = /^(\+54)?(388|155|154)\d{6,8}$/;

    return formato.test(cadena);
}
