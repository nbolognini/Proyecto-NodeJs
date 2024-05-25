window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "#0E281F";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });



  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function () {
      if (navbar.classList.contains("expanded")) {
        navbar.classList.remove("expanded");
      } else {
        navbar.classList.add("expanded");
      }
    });
  });

// creo un array de productos
let productos = [];

// creo una funcion constructora de la clase Producto
function Producto(codigo, nombre, tipo, valorUnidad, cantidad){
    this.codigo = codigo;
    this.nombre = nombre;
    this.tipo = tipo;
    this.valorUnidad = valorUnidad;
    this.cantidad = cantidad;
}

function agregarProducto() {
  let codigo = document.getElementById("txtCodigo").value;
  let nombre = document.getElementById("txtNombre").value;
  let tipo = document.getElementById("txtTipo").value;
  let valorUnidad = document.getElementById("txtValorUnidad").value;
  let cantidad = document.getElementById("txtCantidad").value;

  let nuevoProducto = new Producto(codigo, nombre, tipo, valorUnidad, cantidad);
  productos.push(nuevoProducto);

  let productosDiv = document.getElementById("productosDiv");
  productosDiv.innerHTML = ""; // Limpia el contenedor
  for (let producto of productos) {
      productosDiv.innerHTML += `<p>Código: ${producto.codigo}, Nombre: ${producto.nombre}, Tipo: ${producto.tipo}, Valor: ${producto.valorUnidad}, Cantidad: ${producto.cantidad}</p>`;
  }

  //alert("El producto " + nuevoProducto.codigo + " con valor " + nuevoProducto.valorUnidad + " ha sido agregado");
  limpiarCampos();
}

function mostrarProductos() {
    let listado = 'Se guardarán en la Tienda los siguientes productos:\n';
    for(Producto of productos){
        for(let prop in Producto){
            listado = listado + prop.toUpperCase() + ": " + Producto[prop] + ","
        }
        listado = listado + "\n";
    }
    alert(listado);
    
    limpiarProductosDiv();
    limpiarCampos();
    limpiarProductos()
    recargarPagina()
}

function limpiarCampos() {
    document.getElementById("txtCodigo").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtTipo").value = "";
    document.getElementById("txtValorUnidad").value = "";
    document.getElementById("txtCantidad").value = "";
}

function limpiarProductosDiv() {
  document.getElementById("productosDiv").innerHTML = "";

  // Obténgo los productos existentes de localStorage
  let productosExistentes = JSON.parse(localStorage.getItem('productosLocalStorage')) || [];

  // Combino los productos existentes con los nuevos productos
  let productosActualizados = productosExistentes.concat(productos);

  // JSON.stringify(productos) convierte el array de productos en un string JSON
  // localStorage.setItem('productos', JSON.stringify(productosActualizados)) guarda el string JSON en el localStorage
  localStorage.setItem('productosLocalStorage', JSON.stringify(productosActualizados));
}

function limpiarProductos() {
  productos = [];
}

function recargarPagina() {
  location.reload();
}

function limpiarProductosLocalStorage() {
  localStorage.removeItem('productosLocalStorage');
}