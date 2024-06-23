//defino donde quiero que se almacenen los datos
let cartData = localStorage.getItem('carritoItems')

// defino las variables a usar con el dom captado
let cart = document.querySelector('.carrito')
let carritoTotal = document.querySelector('.carrito-total')

// el condicional lo que hace es preguntar si esta vacio y si esta, deveulve que le carrito esta vacio, y si no esta vacio
//recorre un for que crea adentro un carrito con un array vacio para que despues se complete con la informacion de la api

let itemsHtml = ''

if (cartData === null){
    mensaje = 'su carrito esta vacio'
    cart.innerHTML = mensaje
} else{
   // Si el carrito no está vacío, procesa los datos
    let carrito = [] ;
    carrito = JSON.parse(cartData) 
    let total = 0
    
    
     // Recorre cada item en el carrito y obtiene sus datos de la API
     for(let i=0; i<carrito.length; i++){
        
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
            carritoTotal.innerHTML = total
            cart.innerHTML = itemsHtml
           
        
        })
        .catch(function(error){
            console.log('el error es: ', error)

        })

       }
    } 


let carritoComprar = document.querySelector('#carrito-button')

carritoComprar.addEventListener('click',function(){
    alert("Gracias por su compra, tu compra se ha realizado correctamente")
    localStorage.clear()
    window.location.href = 'index.html'
})


console.log(cartData)
