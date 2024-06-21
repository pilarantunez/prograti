document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.querySelector(".recovery");
    let emailField = document.querySelector("#email");
    let aceptarField = document.querySelector("#aceptar");
    let mensaje = document.querySelector(".mensaje");
    let success = document.querySelector(".success");
    let login = document.querySelector(".login-link");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = emailField.value;
        let aceptar = aceptarField.checked;
        let respuesta = true;
        mensaje.textContent = '';
        let formEnviado = '';

        if (email === '') {
            mensaje.textContent = 'Por favor escriba su email';
            respuesta = false;
        } else if (!aceptar) {
            mensaje.textContent = 'Por favor acepte el campo Quiero recuperar mi contraseña';
            respuesta = false;
        }

        if (respuesta) {
            mensaje.textContent = '';
            formEnviado = "Recibirás un email con las instrucciones para recuperar tu contraseña";
            success.textContent = formEnviado;
            login.innerHTML = '<a href="login.html">Ir al login</a>';
        }
    });
});
