
let queryString = location.search;
let qsto = new URLSearchParams (queryString);
let id = qsto.get('id');

let url = `https://fakestoreapi.com/products/${id}`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let dataString = JSON.stringify(data);
        console.log(dataString);

        let nombreProducto = document.querySelector('.producto-nombre');
        let imagenProducto = document.querySelector('.producto-imagen');
        let descripcionProducto = document.querySelector('.producto-descripcion');
        let precioProducto = document.querySelector('.producto-precio');
        let agregarCarrito = document.querySelector('.add-cart');

        // Actualizar los elementos del DOM con los datos del producto
        nombreProducto.innerText = "nombre:" + data.title;
        imagenProducto.src = data.image;
        descripcionProducto.innerText = "descripcion:" + data.description;
        precioProducto.innerText = "precio:" + data.price;
        agregarCarrito.href = "cart.html?id=" + data.id;
        
    })

    .catch(function (error) {
    console.log("El error es: " + error);
    })


