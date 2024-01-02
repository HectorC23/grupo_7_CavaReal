window.addEventListener('load', () => {
    const select = document.querySelector('#tipProduct');
    const formWines = document.querySelector('#form-wines');
    const formLiquors = document.querySelector('#form-liquors');
    const formAccesories = document.querySelector('#form-accesories');

    console.log(select.value);

    if(select.value){
      
        formWines.style.display = 'none';
        formLiquors.style.display = 'none';
        formAccesories.style.display = 'none';
        
        if (select.value === '1') {
            formWines.style.display = 'flex';
        } else if (select.value === '2') {
            formLiquors.style.display = 'flex';
        } else if (select.value === '3') {
            formAccesories.style.display = 'flex';
        }
    }

    select.addEventListener('change', () => {

        formWines.style.display = 'none';
        formLiquors.style.display = 'none';
        formAccesories.style.display = 'none';
        
        if (select.value === '1') {
            formWines.style.display = 'flex';
          } else if (select.value === '2') {
            formLiquors.style.display = 'flex';
          } else if (select.value === '3') {
            formAccesories.style.display = 'flex';
          }
    })

    //VALIDACIONES

    const form = document.querySelector('#form-product-add');
    let pErrors = document.querySelector('.msg-errors-all');

    let name = document.querySelector('#name');
    let categoryId = document.querySelector('#tipProduct');
    let description = document.querySelector('#description');
    let price = document.querySelector('#price');
    let img = document.querySelector('#img');

    let campos = [name, categoryId, description, price, img];

    //CAMPOS SECUNDARIOS
    let vineyard = document.querySelector('#vineyard');
    let age = document.querySelector('#age');
    let altitude = document.querySelector('#altitude');
    let variety = document.querySelector('#variety');
    let barrels = document.querySelector('#barrels');
    let saved = document.querySelector('#saved');
    let fruity = document.querySelector('#fruity');
    let nothing = document.querySelector('#nothing');
    let dry = document.querySelector('#dry');
    let king = document.querySelector('#king');
    let velvety = document.querySelector('#velvety');
    let light = document.querySelector('#light');
    let delicate = document.querySelector('#delicate');

    let camposWines = [vineyard,age,altitude,variety,barrels,saved,fruity,nothing,dry,king,velvety,light,delicate];
    
    let size = document.querySelector('#size');
    let cutting = document.querySelector('#cutting');
    let producer = document.querySelector('#producer');
    let elaboration = document.querySelector('#elaboration');
    let type = document.querySelector('#type');

    let camposLiquors = [size,cutting,producer,elaboration,type];

    let material = document.querySelector('#material');
    let detail = document.querySelector('#detail');

    let camposAccesories = [material,detail];

    if(select.value){
        
        if (select.value === '1') {
            camposWines.forEach(campo => {
                campo.addEventListener('input', () => {
        
                    console.log(campo.name);
                    validarCamposSecundarios(campo, 1);
                    
                })
            });
        } else if (select.value === '2') {
            camposLiquors.forEach(campo => {
                campo.addEventListener('input', () => {
        
                    console.log(campo.name);
                    validarCamposSecundarios(campo, 2);
                    
                })
            });
        } else if (select.value === '3') {
            camposAccesories.forEach(campo => {
                campo.addEventListener('input', () => {
        
                    console.log(campo.name);
                    validarCamposSecundarios(campo, 3);
                    
                })
            });
        }
    }

    campos.forEach(campo => {
        campo.addEventListener('input', () => {

            console.log(campo.name);
            validarCampo(campo);
            
        })
    });

    form.addEventListener('submit', (e) => {

       pErrors.innerHTML = '';
        let cantidadVacios = 0;

            campos.forEach(campo => {

                console.log(campo.name);

                if( validator.isEmpty(campo.value) && campo.name != 'img'){
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
        alert('Producto creado correctamente');
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

function validarCampo(campo) {

    removeValidation(campo);

    if (validator.isEmpty(campo.value) && campo.name != 'img') {

        isInvalid(campo);
        mostrarMensajeError(campo, `El campo no puede estar vacio`);

    } else {
        removeValidation(campo);
        limpiarErrores(campo);

        isValid(campo)
        
        if (campo.name == 'name' || campo.name == 'lastName'){
            if(!validator.isLength(campo.value.trim(),{min: 5, max: 100})){
                mostrarMensajeError(campo, `Debe tener minimo 5 caracteres`);
            }else{
                isValid(campo);
            }
        }

         if(campo.name === 'description'){
            if(!validator.isLength(campo.value.trim(),{min: 20})){
                mostrarMensajeError(campo, `Debe tener minimo 20 caracteres`);
            }else{
                isValid(campo);
            }
        } 
        
        if(campo.name === 'categoryId'){ 
            if(validator.isInt(campo.value, {lt: 1, gt: 3})){
                mostrarMensajeError(campo, `Categoria invalida`);
            }else{
                isValid(campo);
            }    
        }

        if(campo.name === 'price'){
            if(!validator.isInt(campo.value, {min: 0, max: 100000})){
                mostrarMensajeError(campo, `El precio debe estar comprendido entre 0 y 100000`);
            }else{
                isValid(campo);
            }
        }

        if(campo.name == 'img'){
            console.log(campo.value);
            const allowedExtensions = ['png'];
            const filePath = campo.value;
            const fileExtension = filePath.split('.').pop().toLowerCase();

            if(!allowedExtensions.includes(fileExtension)){
                mostrarMensajeError(campo, `Tipo de imagen no valido. Permitida: .png`);
            }
        }
    }
}

function validarCamposSecundarios(campo,category){
    removeValidation(campo);
    limpiarErrores(campo);

    isValid(campo)

    if(category === 1){
        if(campo.name === 'vineyard'){
            if(validator.isLength(campo.value, { min: 3, max: 100 })){
                mostrarMensajeError(campo, `Debe tener entre 3 y 100 caracteres`);
            }else{
                isValid(campo);
            }
        }

        if(campo.name === 'age' || campo.name === 'barrels' || campo.name === 'saved' || campo.name === 'fruity' || campo.name === 'nothing' || campo.name === 'dry' || campo.name === 'king' || campo.name === 'velvety' || campo.name === 'light' || campo.name === 'delicate'){
            if(!validator.isInt(campo.value, { min: 0, max: 100 })){
                mostrarMensajeError(campo, `Valor minimo 0 y maximo 100`);
            }else{
                isValid(campo);
            }
        }

        if(campo.name === 'altitude' || campo.name === 'variety'){
            if(validator.isLength(campo.value, { min: 5, max: 150 })){
                mostrarMensajeError(campo, `Debe tener minimo 5 y maximo 150 caracteres`);
            }else{
                isValid(campo);
            }
        }
    }

    if(category === 2){
        //FALTA
    }

    if(category === 3){
        //FALTA
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