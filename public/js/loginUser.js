window.addEventListener('load', () => {
    
    const form = document.querySelector('#form-login');

    //VALIDACIONES
    let pErrors = document.querySelector('.msg-errors-all');

    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    let campos = [email,password];

    campos.forEach(campo => {
        campo.addEventListener('input', () => {

            validarCampo(campo);
            
        })
    });

    form.addEventListener('submit', (e) => {

       pErrors.innerHTML = '';
        let cantidadVacios = 0;

            campos.forEach(campo => {

                if( validator.isEmpty(campo.value) && campo.name != 'image'){
                    isInvalid(campo);
                    cantidadVacios++;
                }
            });

    if(cantidadVacios>0){
            pErrors.classList.add('alert-warning');
            e.preventDefault();
            pErrors.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Ningun campo puede estar vacio`;
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

async function validarCampo(campo) {

    removeValidation(campo);

    if (validator.isEmpty(campo.value)) {

        isInvalid(campo);
        mostrarMensajeError(campo, `El campo no puede estar vacio`);

    } else {
        removeValidation(campo);
        limpiarErrores(campo);

        isValid(campo)
        
        if(campo.name === 'email'){
            
            if(!isEmail(campo.value)){
                mostrarMensajeError(campo, `El email debe ser valido`);
            }else{
                let response = await fetch(`http://localhost:3030/check-email?email=${campo.value}`);
                let result = await response.json();

                console.log(result);
            
                if (!result.exists) {
                    mostrarMensajeError(campo, `No existe cuenta con ese email`);
                }else{
                    isValid(campo);
                }
            }
        }
}
}

function mostrarMensajeError(campo, mensaje) {
    let mensajeError = document.querySelector('.mensaje-error');

    if (!mensajeError) {
        mensajeError = document.createElement('p');
        mensajeError.classList.add('mensaje-error');
        campo.insertAdjacentElement('afterend', mensajeError);
    }

    mensajeError.innerHTML = `<small>${mensaje}</small>`;
    mensajeError.classList.add('alert-warning');
    isInvalid(campo);
}

function limpiarErrores(campo) {

    let mensajeError = document.querySelector('.mensaje-error');
    if (mensajeError) {
        mensajeError.remove();
    }

    removeValidation(campo);
}

function isEmail(cadena) {

    const formato = /^\w{1,30}@[a-zA-Z]{1,30}\.[a-zA-Z]+$/;

    return formato.test(cadena);
}