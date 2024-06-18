console.log("category.js");

let qs = location.search;
let qsObj = new URLSearchParams(qs);

let id = qsObj.get("id");
let urlProductsCategory= `https://fakestoreapi.com/products/category/${id}`;
console.log("id: ",id);
console.log("url: ",urlProductsCategory);
fetch(urlProductsCategory)
.then(function (response){
    
    return response.json();
})
.then(function(data) {
    console.log("data: ",JSON.stringify(data,null,4));
     
    //paso 1:Capturo Dom
    let products=document.querySelector(".category") ;
    console.log("products: ", products);
    let arrayProducts=data;
    let productsHTML=''


    //Paso 2: bsucar los datos y actualizar el paso1
    for (let index = 0; index < arrayProducts.length; index++) {
        productsHTML+= `<article class="producto">
                                        <h3>${arrayProducts[index].title}</h3>
                                        <img src="${arrayProducts[index].image}" alt="${arrayProducts[index].title}">
                                        <p>${arrayProducts[index].description}</p>
                                        <h3>${arrayProducts[index].price}</h3>
                                        <a href="./producto.html?id=${arrayProducts[index].id}" class="button-ver">Ver más</a>
                                    </article>`;
    }
    products.innerHTML =productsHTML;
    
    
})
.catch(function (error) {
    console.log("El error es: ", error);
})
