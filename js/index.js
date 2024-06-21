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


let urlMujer = "https://fakestoreapi.com/products/category/women's%20clothing";

fetch(urlMujer)
    .then(function(response){
        return response.json();
    })
    .then(function name(data){
        console.log(data);
        let info = data;
        let productos = document.querySelector(".home-sections-mujer");
        let ropaMujer = '';
        
        for (let index = 0; index < info.length; index++){
            ropaMujer += `<article class="producto">
                            <h3>Nombre: ${info[index].title}</h3>
                            <img src="${info[index].image}" alt="${info[index].id}">
                            <p>Descripción: ${info[index].description}</p>
                            <h3>Precio: ${info[index].price}</h3>
                            <a href="./producto.html?id=${info[index]}" class="button-ver">Ver más</a>
                          </article>`;
        }
        
        productos.innerHTML = ropaMujer;

    })
    .catch(function(error){
        console.log("El error es: " + error);
    });




let urlHombres = "https://fakestoreapi.com/products/category/men's%20clothing"

fetch(urlHombres)
.then(function (response){
    return response.json();
})
.then(function name(data) {
    console.log(data);
    let info= data;
    let productos = document.querySelector(".home-sections-hombre") 
    let ropaHombre= ''

    for (let index = 0; index < info.length; index++) {
        ropaHombre += `<article class="producto">
                        <h3> Nombre:${info[index].title}</h3>
                        <img src=${info[index].image} alt=${info[index].id}>
                        <p>Descripcion: ${info[index].description}</p>
                        <h3>Precio:  USD${info[index].price}</h3>
                        <a href="./producto.html?id=${info[index]}" class="button-ver"> Ver mas</a>
                    </article>`
    
    }
    productos.innerHTML = ropaHombre;
    
})
.catch(function (error) {
    console.log("El error es: " +error);
})