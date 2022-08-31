// VARIABLES Y CONSTANTES

const contenedorDivPantalones = document.getElementById("contenedorPantalones")
const iconoCarrito = document.getElementById("iconoCarrito")
const pantalones = [{id: 1, titulo: "Jogger Cargo",subtitulo: "Calidad premium",tela: "Gabardina",talles: "Del S al XXL",imagen: "https://cf.shopee.com.ar/file/b0019cf046e3319d1bda958ae9790fe4_tn",precio: 2500, cantidad: 0},{id: 2,titulo: "Pantalon Corte Chino",subtitulo: "Calidad premium",tela: "Algodon",talles: "Del S al XXL",imagen: "https://i.blogs.es/134b47/pantalones-hombre-sfera/450_1000.jpg",precio: 2200, cantidad: 0},{id: 3,titulo: "Pantalon Cargo Rustico",subtitulo: "Calidad premium",tela: "Algodon rustico con lycra",talles: "Del S al XXL",imagen: "https://cdn.shopify.com/s/files/1/0339/7965/products/kaki-2_jpg.jpg?v=1553787070",precio: 2300, cantidad: 0},{id: 4, titulo: "Jean Chupin Azul Marino", subtitulo: "Calidad premium",tela: "Jean elastizado",talles: "Del S al XXL",imagen: "https://taverniti.vteximg.com.br/arquivos/ids/237689-345-345/11294_922X1.jpg?v=637807951727030000",precio: 2400, cantidad: 0}]
const carrito = []




// INICIO PROGRAMA


pantalones.forEach((producto) => {
  const divPantalones = document.createElement("div")
    divPantalones.innerHTML += 
      `  
        <div class="card tarjetas" style="width: 18rem;" > 
          <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body tarjetas">
              <h5 class="card-title">${producto.titulo}</h5>
              <p class="card-text">${producto.subtitulo}</p>
              <p class="card-text">${producto.tela}</p>
              <p class="card-text">${producto.talles}</p>
              <p class="card-text">Precio: ${producto.precio}</p>
              <button id="agregar${producto.id}" class="btn btn-secondary">Agregar al carrito</button>
            </div>
        </div>
      `  
    contenedorDivPantalones.appendChild(divPantalones)

    const botonAgregarAlCarrito = document.getElementById(`agregar${producto.id}`)

    botonAgregarAlCarrito.addEventListener("click", () => {
      agregarAlCarrito(producto.id)
      Toastify({
        text: "El producto se agregó al carrito",
        duration: 3000,
        destination: "./carrito.html",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "black",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    })
}) 

const agregarAlCarrito = (productoId) => {
  const item = pantalones.find((producto) => producto.id === productoId)
  carrito.push(item)
  localStorage.setItem("productos", JSON.stringify(carrito))
}






