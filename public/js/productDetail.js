window.addEventListener('load', () => {
    const plus = document.querySelector('.fa-circle-plus');
    const minus = document.querySelector('.fa-circle-minus');
    const cantidad = document.querySelector('.wine-units input');

    let valor= 0;
    cantidad.value = 0;

    plus.addEventListener('click', () => {
        if(valor<10){
            cantidad.value = ++valor;
        }
    })

    minus.addEventListener('click', () => {
        if(valor>0){
            cantidad.value = --valor;
        }
    })

})