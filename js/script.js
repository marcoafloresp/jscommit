function headBienvenida() {
    variable    = new Array();
    variable[0] = 'Bienvenido';
    variable[1] = 'Welcome';
    variable[2] = 'Velkommen';
    variable[3] = 'Aloha';
    variable[4] = 'Vitej';
    variable[5] = 'Bienvenue';
    variable[6] = 'Bula';
    variable[7] = 'Wolkom';
    variable[8] = 'Yokoso';
    variable[9] = 'Bem Vindo';
    variable[10] = 'Shalom';
    aleatorio   = Math.floor(Math.random() * 10);
    return variable[aleatorio];
}
let tituloEncabe = document.getElementById("tituloEncabe");
tituloEncabe.innerHTML = headBienvenida();

function agregarDatosClientes() {
    let nombre = document.getElementById("nombre").value;
    let nombreError = document.getElementById("nombreError");
    let apellido = document.getElementById("apellido").value;
    let apellidoError = document.getElementById("apellidoError");
    let cantidad = document.getElementById("canRemeras").value;
    let canError = document.getElementById("canError");

    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Apellido", apellido);
    localStorage.setItem("Cantidad de remeras", cantidad);

    //ingreso fecha de ingreso nombre
    
    const fechaActual = nombre && new Date();

    document.getElementById("muestraDatos").innerHTML = `<p class="alert alert-success" role="alert">${fechaActual}</p>`;

/*     document.getElementById("nombre").value ="";
    document.getElementById("apellido").value =""; */

    //let totalRemera = document.getElementById("totalRemera").value;
    
    if (nombre == "") {
        nombreError.innerHTML = "Por favor complete la casilla Nombre para realizar su pedido!";
        nombreError.className = "text-secondary";
        return false;
    } else {
        nombreError.innerHTML = "";
        nombreError.className = "";
    }

    if (apellido == "") {
        apellidoError.innerHTML = "Por favor complete la casilla Apellido para realizar su pedido!";
        apellidoError.className = "text-secondary";
        return false;
    } else {
        apellidoError.innerHTML = "";
        apellidoError.className = "";
    }
    if (cantidad == "") {
        canError.innerHTML = "Por favor seleccione una cantidad!";
        canError.className = "text-secondary";
        return false;
    } else {
        canError.innerHTML = "";
        canError.className = "";
    }
    
let precio_remera = 500;
var suma_final = precio_remera * cantidad;
console.log(suma_final);
document.getElementById("totalRemera").value = suma_final;

//funcion descuento efectivo//

let formaPago = document.getElementById("formaPago").value;

//condicional simpli
formaPago == "TARJETA" ? pagoTarjeta() : pagoEfectivo();

function pagoEfectivo(){
    let descuentoEfectivo = ((suma_final * 5)/100);
    let sumaFinal = suma_final - descuentoEfectivo;
    document.getElementById("resultadoPago").innerHTML = `<p class="alert alert-success" role="alert">El precio final es de $${sumaFinal}</p>`;
}

function pagoTarjeta() {
    document.getElementById("resultadoPago").innerHTML = `<p class="alert alert-danger" role="alert">Este sistema de pago no posee beneficio.</p>`;
}
// pop-up (libreria sweetalert2) confirmacion pedido cantidad unidades para luego seguir con pedido.

Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Gracias por realizar el pedido, para finalizar eliga los colores y prosiga con el carrito de compras',
    showConfirmButton: true,
    confirmButtonText: "Continuar",
  })
}

//ingreso array productos para carrito
const coloresRemeras = [
    {id:1, vinilo:"negro", imagen:"negro.png", precio: 1050},
    {id:2, vinilo:"blanco", imagen:"blanco.jpeg", precio: 1050},
    {id:3, vinilo:"amarillo", imagen:"amarillo.png", precio: 1050},
    {id:4, vinilo:"azul cielo", imagen:"azulcielo.png", precio: 1050},
    {id:5, vinilo:"bordo", imagen:"bordo.jpeg", precio: 1050},
    {id:6, vinilo:"francia", imagen:"francia.png", precio: 1050},
    {id:7, vinilo:"gris claro", imagen:"grisclaro.png", precio: 1050},
    {id:8, vinilo:"limon", imagen:"limon.jpeg", precio: 1050},
    {id:9, vinilo:"marino", imagen:"marino.png", precio: 1050},
    {id:10, vinilo:"naranja", imagen:"naranja.png", precio: 1050},
    {id:11, vinilo:"oro", imagen:"oro.png", precio: 1050},
    {id:12, vinilo:"piel", imagen:"piel.jpeg", precio: 1050},
    {id:13, vinilo:"plata", imagen:"plata.png", precio: 1050},
    {id:14, vinilo:"rojo", imagen:"rojo.png", precio: 1050},
    {id:15, vinilo:"rosa", imagen:"rosa.png", precio: 1050},
    {id:16, vinilo:"verde", imagen:"verde.png", precio: 1050},
    {id:17, vinilo:"verde claro", imagen:"verdeclaro.png", precio: 1050},
    {id:18, vinilo:"violeta", imagen:"violeta.png", precio: 1050},
    {id:19, vinilo:"fuscia", imagen:"fucsia.jpeg", precio: 1050},
]

// seccion localStorage
function guardarColoresRemLS(coloresRemeras){
    localStorage.setItem("coloresRemeras", JSON.stringify(coloresRemeras));
}
function cargaColoresRemLS(){
    return JSON.parse(localStorage.getItem("coloresRemeras"))||[];
}

function guardarColoresRemCarrito(coloresRemeras){
    localStorage.setItem("Colores_carrito", JSON.stringify(coloresRemeras));
}

//funcion de carga estado carrito producto operador L.

function cargaColoresRemCarrito(){
    return JSON.parse(localStorage.getItem("Colores_carrito")) || [];
}

function buscarColor(id){
    const productos = cargaColoresRemLS();
    return productos.find(item => item.id === id);
}

function agregarColorLocal(id){
    const colores_carrito = cargaColoresRemCarrito(); 
    const producto = buscarColor(id);
    colores_carrito.push(producto);
    guardarColoresRemCarrito(colores_carrito);
    actualizarBotonCarrito();
}

//seccion localStorage carrito

function actualizarBotonCarrito(){
    const colores_carrito = cargaColoresRemCarrito();
    let total = colores_carrito.length;
    let contenido = `<button type="button" class="btn btn-warning position-relative ">
    Cantidad de material / productos agregados al carrito:
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> ${total}
    </span>
  </button>`;
  document.getElementById("botonCompra").innerHTML = contenido;
}
// cards array productos y boton carrito

function renderColores(){
    const coloresRemeras = cargaColoresRemLS();
    let datosCard = "";
    
    coloresRemeras.forEach((coloresR) => {
        datosCard += `
        <div id="${coloresR.id}" class=" coloresCont col-md-2">
        <div class="card text-bg-warning bg-transparent border-success mb-3 p-2 text-center">
        <img src="imagenes/${coloresR.imagen}" class="card-img-top rounded-circle" alt="${coloresR.vinilo}">
        <div class="card-body">
          <h5 class="card-title fs-6">${coloresR.vinilo}</h5>
          <p class="card-text fs-6">$${coloresR.precio}</p>
          <a href="#" class="btn btn-info btn-sm btnAgregado" onclick="agregarColorLocal(${coloresR.id})">Agregar</a>
        </div>
      </div></div>`
    });

    document.getElementById("coloresRemeras").innerHTML = datosCard;
}

function sumarACarrito() {
    const materialCarrito = cargaColoresRemCarrito();
    const botonesArray = document.querySelectorAll(".btnAgregado");
  
    botonesArray.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        let itemId = parseInt(e.target.closest(".coloresCont").id);
        let pos = materialCarrito.findIndex((coloresR) => coloresR.id === itemId);
        if (pos > -1) {
          materialCarrito[pos].cantidad += 1;
        } else {
          let item = coloresRemeras.find((coloresR) => coloresR.id === itemId);
          item.cantidad = 1;
          materialCarrito.push(item);
        }
        // libreria referencia pop-up materiales agregados al carrito
        Toastify({
            text: "Material Agregado",
            className: "info",
            duration: 4000,
            style: {
              background: "gray",
            }
          }).showToast();
        cargaColoresRemCarrito(materialCarrito);
      });
    });
  }
//llamado funciones
guardarColoresRemLS(coloresRemeras);
renderColores();
actualizarBotonCarrito();
sumarACarrito();

//eventos de usuario
document.getElementById("botonEnviar").addEventListener("click", agregarDatosClientes);
document.getElementById("botonCantidad").addEventListener("click", agregarDatosClientes);
document.querySelectorAll(".btnAgregado").addEventListener("click", actualizarBotonCarrito);