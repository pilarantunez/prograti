let todotrue=true
let formulario = document.querySelector('form');
let mail= document.querySelector('.email');
let contrasenia= document.querySelector('.contrasenia');

let invalidemail= document.querySelector('.email')

formulario.addEventListener('submit', function(event) {
    event.preventDeFault();
    if (email.value ==''){
        todotrue=false
        let mensaje1= ('Por favor complete el campo email')
        let completar1=alert(mensaje1)

    }
        else if (email.value.lenght<8);
        todotrue=false
    
    if (contrasenia.value ==''){
        todotrue=false

        let mensaje2= ('Por favor complete el campo de contrasenia')
        let completar2=alert(mensaje2)
    }
        else if (contrasenia.value.lenght>6);
            todotrue=false
            let mensaje3= ('La contraseña debe tener al menos 6 caracteres')
            let completar3=alert(mensaje3)
            
   
})