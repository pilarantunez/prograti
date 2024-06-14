console.log("category.js");

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("id");
let urlProductsCategory=`https://fakestoreapi.com/products/category${id}`;

fetch(urlProductsCategory)
.then(function (response){
    return response.json();
})
.then(function name(data) {
    console.log(data);
     
    //paso 1:Capturo Dom
    let products=document.querySelector(".category") ;
    let arrayProducts=data;
    let productsHTML=''


    //Paso 2: bsucar los datos y actualizar el paso1
    for (let index = 0; index < data.length; index++) {
        productsHTML+= `<article class="producto">
                                        <h3>${arrayProducts[index].title}</h3>
                                        <img src="${arrayProducts[index].image}" alt="${products[index].title}">
                                        <p>${arrayProducts[index].description}</p>
                                        <h3>${arrayProducts[index].price}</h3>
                                        <a href="./producto.html?id=${arrayProducts[index].id}" class="button-ver">Ver más</a>
                                    </article>`;
    }
    products.innerHTML =productsHTML;
    
    
})
.catch(function (error) {
    console.log("El error es: " +error);
})
