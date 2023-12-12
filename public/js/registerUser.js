window.addEventListener('load', () => {
    const form = document.querySelector('#form-register');
    const subscription = document.querySelector('#subscripcion');

    form.addEventListener('submit', () => {
        subscription.value = subscription.checked? 1 : 0;
    })
})