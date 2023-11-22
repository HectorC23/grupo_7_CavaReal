window.addEventListener('load', () => {
    const select = document.querySelector('#tipProduct');
    const formWines = document.querySelector('#form-wines');
    const formLiquors = document.querySelector('#form-liquors');
    const formAccesories = document.querySelector('#form-accesories');

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
})