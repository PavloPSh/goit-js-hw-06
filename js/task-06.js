const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener ('blur', onInputBlur);

function onInputBlur () {

    inputEl.classList.remove('valid', 'invalid');

    inputEl.value.length === Number(inputEl.dataset.length)?
    inputEl.classList.add( 'valid'):
    inputEl.classList.add('invalid')
    
};




