function actualizarListado() {
    let productos = JSON.parse(localStorage.getItem('productosLocalStorage'));
    let productosDiv = document.getElementById("productosDiv");
    productosDiv.innerHTML = ""; // Limpia el contenedor
    for (let producto of productos) {
        productosDiv.innerHTML += `<p>Código: ${producto.codigo}, Nombre: ${producto.nombre}, Tipo: ${producto.tipo}, Valor: ${producto.valorUnidad}, Cantidad: ${producto.cantidad}</p>`;
    }
  }
  
  setInterval(actualizarListado, 1000); // Actualiza la lista cada segundo