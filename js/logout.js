
let logoutButton = document.querySelector('#logout-button');


logoutButton.addEventListener('click', function() {
    localStorage.clear(); 
    window.location.href = 'login.html';
});
