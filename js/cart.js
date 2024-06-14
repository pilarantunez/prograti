// defino las variables a usar con el dom captado
let cart = document.querySelector('.carrito')
let carritoTotal = document.querySelector('carrito-total')

//defino donde quiero que se almacenen los datos

let cartData = localStorage.getItem("carritoItems")

// el condicional lo que hace es preguntar si esta vacio y si esta, deveulve que le carrito esta vacio, y si no esta vacio
//recorre un for que crea adentro un carrito con un array vacio para que despues se complete con la informacion de la api

if (cartData === null){
    mensaje = 'su carrito esta vacio'
    cart.innerHTML = mensaje
} else{
   
    carrito = [] ;
    carrito = JSON.parse(cartData) 
    let itemsHtml = ''
    let total = 0
    
    
    
    for(let i=0; i<carrito.length; i++){
        carrito = itemsHtml
        let id = carrito[i]
        let url = `https://fakestoreapi.com/products/${id}`
        fetch(url)
        .then(function(response){
            return response.json()

        })
        .then(function(data){
            
            itemsHtml += `<article class="producto">
                        <h3> Nombre:${data.title}</h3>
                        <img src=${data.image} alt=${data.id}>
                        <p>Descripcion: ${data.description}</p>
                        <h3>Precio: ${data.price}</h3>
                        
                    </article>`
                        
           
            
            total += data.price
            cart.innerHTML = itemsHtml
            carritoTotal += `Total: ${total}
                            <button id="carritoComprar">Finalizar Compra</button>
                            `

            
        })
        .catch(function(error){
            console.log('el error es: ', error)

        })

       }
        
    } 


carritoComprar = document.querySelector(".carritoComprar")
//carritoComprar.addEventListener('click',)


console.log(cartData)
