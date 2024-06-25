
let queryString = location.search;
let qsto = new URLSearchParams (queryString);
let id = qsto.get('id');

let url = `https://fakestoreapi.com/products/${id}`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let dataString = JSON.stringify(data);
        console.log(dataString);

        let nombreProducto = document.querySelector('.producto-nombre');
        let imagenProducto = document.querySelector('.producto-imagen');
        let descripcionProducto = document.querySelector('.producto-descripcion');
        let precioProducto = document.querySelector('.producto-precio');
        let categoriaProducto = document.querySelector('.producto-categoria');
        let agregarCarritoBtn = document.querySelector('.button');

        // Actualizar los elementos del DOM con los datos del producto
        nombreProducto.innerText = data.title;
        imagenProducto.src = data.image;
        descripcionProducto.innerText = data.description;
        precioProducto.innerText = "precio: USD" + ' ' + data.price;
        categoriaProducto.innerHTML = `<a href="./category.html?id=${data.category}"> ver mas en su categoria: ${data.category}</a>`;

        agregarCarritoBtn.addEventListener('click', function() {
            let carrito = JSON.parse(localStorage.getItem('carritoItems')) || [];
            carrito.push(data.id);
            localStorage.setItem('carritoItems', JSON.stringify(carrito));
            alert('Producto agregado al carrito!');
        });
    })

    .catch(function (error) {
        console.log("El error es: " + error);
    });
