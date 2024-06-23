//captura el boton usando dom
let logoutButton = document.querySelector('#logout-button');

//cuando apreta el usuario el boton de logout, los datos guardados localmente se borraran y se lo redirige al login 
logoutButton.addEventListener('click', function() {
    localStorage.clear(); 
    window.location.href = 'login.html';
});
