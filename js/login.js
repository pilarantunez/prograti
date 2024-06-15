//a
let formulario = document.querySelector('form');
let mail= document.querySelector('.email');
let contrasenia= document.querySelector('.contrasenia');


formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    let todotrue=true;

    if (mail.value ===''){
        alert('Por favor complete el campo email');
        todotrue=false;
    }
    if (contrasenia.value ===''){
        alert('Por favor complete el campo de contrasenia');
        todotrue=false;
    }
    else if (contrasenia.value.length<6){;
        alert('La contraseña debe tener al menos 6 caracteres');
        todotrue=false;
    }
    if(todotrue){
        localStorage.setItem('email', mail.value);
        localStorage.setItem('contrasenia', contrasenia.value);
        location.href='index.html';

    }

});
