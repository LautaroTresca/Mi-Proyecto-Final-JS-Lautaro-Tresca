// VARIABLES Y CONSTANTES

const divCarrito = document.getElementById("divCarrito")
const mainCarrito = document.getElementById("mainCarrito")
const modalCarrito = document.createElement("div")
const tBody = document.createElement("tbody")
tBody.id = "tBody"
const carrito = JSON.parse(localStorage.getItem("productos"))
const tablaDeProductos = document.getElementById("tablaDeProductos")
const precioTotal = document.getElementById("precioTotal")
const botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

// FUNCIONES

function eliminarProducto(productoId){
    const item = carrito.find((producto) => producto.id == productoId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1) 
    localStorage.setItem("productos", JSON.stringify(carrito))   
    mostrarCarrito()        
} 




function mostrarCarrito(){
    if(localStorage.length === 0){
      modalCarrito.innerHTML += 
        ` 
            <div class="mainCarrito">
              <p class="textoCarritoVacio">El carrito esta vacio</p>
            </div>
        `  
          }else{      
            tBody.innerHTML = ""

            carrito.forEach((producto) =>{
              tBody.innerHTML += 
                ` 
                <tr>  
                  <th scope="col">${producto.titulo}</th>
                  <th scope="col">$${producto.precio}</th>
                  <th scope="col"><img class="imagenEnCarrito" src="${producto.imagen}"></th>
                  <th scope="col"><button class="botones" id="botonSumar">+</button><input class="inputCantidad" type="number" id="inputCantidad" readonly value=0><button class="botones" id="botonRestar">-</button></th>
                  <th scope="col"><button class="botones" onclick="eliminarProducto(${producto.id})">Eliminar</button></th>
                </tr>
                  `             
              })    
              precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.precio, 0)                           
    }  
    divCarrito.appendChild(modalCarrito)

    tablaDeProductos.appendChild(tBody)       
} 

// INICIO PROGRAMA

mostrarCarrito()


if(carrito.length !== 0){
  const botonSumar = document.getElementById("botonSumar")
      botonSumar.addEventListener("click", () =>{
          if(localStorage.getItem("contador") == null){
            localStorage.setItem("contador", "1")
          }else{
            let contador = Number(localStorage.getItem("contador")) + 1
            localStorage.setItem("contador", contador)
            document.getElementById("inputCantidad").value=contador
          }
      })




  const botonRestar = document.getElementById("botonRestar")
  botonRestar.addEventListener("click", () =>{
    if(localStorage.getItem("contador") == null){
      localStorage.setItem("contador", "1")
    }else{
      let contador = Number(localStorage.getItem("contador")) - 1 
      localStorage.setItem("contador", contador)
      document.getElementById("inputCantidad").value=contador
    }
  })
}


botonFinalizarCompra.addEventListener("click", () =>{
  Swal.fire({
    title: '¿Esta seguro de que quiere confirmar la compra?',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      if(carrito.length === 0){
        Swal.fire('No hay ningun producto en el carrito', '', 'info')
      }else{
      Swal.fire('¡Muchas gracias por su compra!', 'Su pedido será despachado en las proximas horas', 'success')
      }
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
})