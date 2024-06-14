console.log("index.js");
let apiKey = "https://fakestoreapi.com/products";

let urlJoyas = 'https://fakestoreapi.com/products/category/jewelery'


fetch(urlJoyas)
.then(function (response){
    return response.json();
})
.then(function name(data) {
    console.log(data);
    let info= data;//Array de datos que vino de la API
    //paso 1:Capturo Dom
    let productos = document.querySelector(".home-sections-jewelery") 
    let accesorios= ''
    //Paso 2: bsucar los datos y actualizar el paso1
    for (let index = 0; index < info.length; index++) {
        accesorios += `<article class="producto">
                        <h3> Nombre:${info[index].title}</h3>
                        <img src=${info[index].image} alt=${info[index].id}>
                        <p>Descripcion: ${info[index].description}</p>
                        <h3>Precio:  USD${info[index].price}</h3>
                        <a href="./producto.html?id=${info[index]}" class="button-ver"> Ver mas</a>
                    </article>`
    
    }
    productos.innerHTML =accesorios;
    
})
.catch(function (error) {
    console.log("El error es: " +error);
})