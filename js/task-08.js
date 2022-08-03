
const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {

    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const pass = event.currentTarget.elements.password.value;


    console.log(email, pass);


    email === "" || pass === "" ?
    alert('Все поля должны быть заполнены'):
    console.log({email, pass});

    event.currentTarget.reset();
     

}



// const formData = new FormData(event.currentTarget);

    // formData.forEach( (value, name) => {
        
    //     console.log(value)
    //     console.log(name)

    // })