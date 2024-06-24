let email = localStorage.getItem('email');

    if (email){
        let bienvenidaSpan = document.querySelector('#bienvenida');
        let loginItem = document.querySelector('#login');
        let registroItem = document.querySelector('#registro');
        
        bienvenidaSpan.innerHTML = `Bienvenido/a: ${email}`;
    
        // ocultar elementos de login y registro
        loginItem.style.display = 'none';
        registroItem.style.display = 'none';
    };