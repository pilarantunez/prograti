document.addEventListener('DOMContentLoaded', function(){
    let email = localStorage.getItem('email');

    if (email){
        let bienvenidaSpan = document.getElementById('bienvenida');
        let loginItem = document.getElementById('login');
        let registroItem = document.getElementById('registro');

        // construir el contenido HTML del mensaje de bienvenida y enlace de logout
        bienvenidaSpan.innerHTML = `Bienvenido/a: ${email}<br> `;

        // agregar evento al enlace de logout
        /*/
        let logoutLink = document.getElementById('logoutLink');
        logoutLink.addEventListener('click', function(e){
            e.preventDefault();
            localStorage.removeItem('email');
            bienvenidaSpan.innerText = ''; 
            loginItem.style.display = ''; 
            registroItem.style.display = '';
        });
/*/
        // ocultar elementos de login y registro
        loginItem.style.display = 'none';
        registroItem.style.display = 'none';
    }
});