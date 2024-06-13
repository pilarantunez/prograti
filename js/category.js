console.log("category.js");

let apiUrl = "https://fakestoreapi.com";

let urlCat=`${apiUrl}/products/categories`;


fetch(urlCat)
.then(function (response){
    return response.json();
})
.then(function name(data) {
    console.log(data);
     
   
    //paso 1:Capturo Dom
    let categoryTitle = document.querySelector(".category") ;
    let categoryProducts = document.querySelector(".category-products") ;
    categoryTitle.innerText = "Categorias";

    //Paso 2: bsucar los datos y actualizar el paso1
    for (let index = 0; index < data.length; index++) {
        categoryProducts.innerHTML+= `<article class="producto">
                                        <h3>${products[index].title}</h3>
                                        <img src="${products[index].image}" alt="${products[index].title}">
                                        <p>${products[index].description}</p>
                                        <h3>${products[index].price}</h3>
                                        <a href="./producto.html?id=${products[index].id}" class="button-ver">Ver más</a>
                                    </article>`;
    }
    
})
.catch(function (error) {
    console.log("El error es: " +error);
})