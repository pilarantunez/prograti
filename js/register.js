let formulario = document.querySelector('form');
let mail= document.querySelector('.email');
let contrasenia= document.querySelector('.contrasenia');
let repetirContra= document.querySelector('.repetirContra');

let emailError = document.querySelector('.emailError');
let contraError = document.querySelector('.contraError');
let repetirContraError = document.querySelector('.repetirContraError');
//vaciar los mensajes cuando da error cuando cargas la pagina
emailError.innerHTML = "";
contraError.innerHTML = "";
repetirContraError.innerHTML = "";



formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    let todotrue=true;

    if (mail.value ===''){
        emailError.innerHTML='Por favor complete el campo email';
        todotrue = false
    }
    if (contrasenia.value ===''){
       contraError.innerHTML = 'Por favor complete el campo de contrasenia';
        todotrue=false;
    }
    else if (contrasenia.value.length<6){
        contraError.innerHTML = 'La contraseña debe tener al menos 6 caracteres';
        todotrue=false;
    }
    if (contrasenia.value !== repetirContra.value){
        repetirContraError.innerHTML = "Las contrasenias no coinciden"
        todotrue=false;
    }
    if(todotrue){
        localStorage.setItem('email', mail.value);
        localStorage.setItem('contrasenia', contrasenia.value);
        location.href='login.html';

    }
})
