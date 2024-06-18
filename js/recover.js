let formulario = document.querySelector(".recovery")
let email = document.querySelector(".email")
let aceptar = document.querySelector(".aceptar")
let mensaje = document.querySelector(".mensaje")
let success = document.querySelector(".success")

formulario.addEventListener('submit',function(event){
    event.preventDefault()

    mensaje.textContent = ''
    success.style.display = 'none';


    if(email === 0){
        mensaje.textContent = 'Por favor escriba su email'
    } else if(!aceptar){
        mensaje.textContent = 'Por favor acepte el campo Quiero recuperar mi contraseña'
    }else{
        mensaje.textContent = ''
        success.style.display = 'block'
    }


})