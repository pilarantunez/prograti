let todotrue=true
let formulario = document.querySelector('form');
let mail= document.querySelector('.email');
let contrasenia= document.querySelector('.contrasenia');

//let invalidemail= document.querySelector('.email')

formulario.addEventListener('submit', function(event) {
    event.preventDeFault();

    if (email.value ==''){
        alert('Por favor complete el campo email');
        let todotrue=true
    }
    if (contrasenia.value ==''){
        
       alert('Por favor complete el campo de contrasenia');
        
        todotrue=false
    }
    else if (contrasenia.value.lenght>6){;
    alert('La contraseña debe tener al menos 6 caracteres');
    todotrue=false
    }
    else
        localStorage.setItem('email', email.value);
        localStorage.setItem('contrasenia', email.value);
        console.log(localStorage);
        this.submit();
}

)
