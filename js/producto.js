document.addEventListener('DOMContentLoaded', function(){
    let queryString = location.search;
    let qsto = new URLSearchParams (queryString);
    let id = qsto.get('id');

    let url = "https://fakestoreapi.com/products/";

fetch(url + id)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let nombreProducto = document.querySelector('h2');
        let imagenProducto = document.querySelector('producto-imagen');
        let descripcionProducto = document.querySelector('#producto-descripcion');
        let precioProducto = document.querySelector('h3');

            // Actualizar los elementos del DOM con los datos del producto
            nombreProducto.innerText = data.title;
            imagenProducto.src = data.image;
            descripcionProducto.innerText += data.description;
            precioProducto.innerText += data.price;
    })

.catch(function (error) {
    console.log("El error es: " + error);
})

});