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
      nombreError.innerHTML = "<b>Por favor complete la casilla Nombre para realizar su pedido!</b>";
      nombreError.className = "text-danger";
      return false;
  } else {
      nombreError.innerHTML = "";
      nombreError.className = "";
  }

  if (apellido == "") {
      apellidoError.innerHTML = "<b>Por favor complete la casilla Apellido para realizar su pedido!</b>";
      apellidoError.className = "text-danger";
      return false;
  } else {
      apellidoError.innerHTML = "";
      apellidoError.className = "";
  }
  if (cantidad == "") {
      canError.innerHTML = "<b>Por favor seleccione una cantidad!</b>";
      canError.className = "text-danger";
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
  {id:1, vinilo:"Negro", imagen:"negro.png", precio: 1050},
  {id:2, vinilo:"Blanco", imagen:"blanco.jpeg", precio: 1090},
  {id:3, vinilo:"Amarillo", imagen:"amarillo.png", precio: 1150},
  {id:4, vinilo:"Azul cielo", imagen:"azulcielo.png", precio: 1190},
  {id:5, vinilo:"Bordo", imagen:"bordo.jpeg", precio: 1055},
  {id:6, vinilo:"Francia", imagen:"francia.png", precio: 1150},
  {id:7, vinilo:"Gris claro", imagen:"grisclaro.png", precio: 1050},
  {id:8, vinilo:"Limon", imagen:"limon.jpeg", precio: 1055},
  {id:9, vinilo:"Marino", imagen:"marino.png", precio: 1150},
  {id:10, vinilo:"Naranja", imagen:"naranja.png", precio: 1350},
  {id:11, vinilo:"Oro", imagen:"oro.png", precio: 1030},
  {id:12, vinilo:"Piel", imagen:"piel.jpeg", precio: 1010},
  {id:13, vinilo:"plata", imagen:"plata.png", precio: 1015},
  {id:14, vinilo:"Rojo", imagen:"rojo.png", precio: 1250},
  {id:15, vinilo:"Rosa", imagen:"rosa.png", precio: 1350},
  {id:16, vinilo:"Verde", imagen:"verde.png", precio: 1050},
  {id:17, vinilo:"Verde claro", imagen:"verdeclaro.png", precio: 1100},
  {id:18, vinilo:"Violeta", imagen:"violeta.png", precio: 1070},
  {id:19, vinilo:"Fuscia", imagen:"fucsia.jpeg", precio: 1080},
  {id:20, vinilo:"Negro", imagen:"negro.png", precio: 1010},
  {id:21, vinilo:"Blanco", imagen:"blanco.jpeg", precio: 1000},
  {id:22, vinilo:"Amarillo", imagen:"amarillo.png", precio: 1080},
  {id:23, vinilo:"Azul cielo", imagen:"azulcielo.png", precio: 1070},
  {id:24, vinilo:"Bordo", imagen:"bordo.jpeg", precio: 1020},
  {id:25, vinilo:"Francia", imagen:"francia.png", precio: 950},
  {id:26, vinilo:"Gris claro", imagen:"grisclaro.png", precio: 980},
  {id:27, vinilo:"Limon", imagen:"limon.jpeg", precio: 999},
  {id:28, vinilo:"Marino", imagen:"marino.png", precio: 850},
  {id:29, vinilo:"Naranja", imagen:"naranja.png", precio: 890},
  {id:30, vinilo:"Oro", imagen:"oro.png", precio: 920},
  {id:31, vinilo:"Piel", imagen:"piel.jpeg", precio: 1050},
  {id:32, vinilo:"Plata", imagen:"plata.png", precio: 1080},
  {id:33, vinilo:"Rojo", imagen:"rojo.png", precio: 1050},
  {id:34, vinilo:"Rosa", imagen:"rosa.png", precio: 1050},
  {id:35, vinilo:"Verde", imagen:"verde.png", precio: 1050},
  {id:36, vinilo:"Verde claro", imagen:"verdeclaro.png", precio: 1050},
  {id:37, vinilo:"Violeta", imagen:"violeta.png", precio: 1050},
  {id:38, vinilo:"Fuscia", imagen:"fucsia.jpeg", precio: 1050},
  {id:39, vinilo:"Rojo", imagen:"rojo.png", precio: 1050},
  {id:40, vinilo:"Rosa", imagen:"rosa.png", precio: 1050},
  {id:41, vinilo:"Verde", imagen:"verde.png", precio: 1050},
  {id:42, vinilo:"Verde claro", imagen:"verdeclaro.png", precio: 1050},
  {id:43, vinilo:"Violeta", imagen:"violeta.png", precio: 1050},
  {id:44, vinilo:"Fuscia", imagen:"fucsia.jpeg", precio: 1050},
  {id:45, vinilo:"Amarillo", imagen:"amarillo.png", precio: 1050},
  {id:46, vinilo:"Azul cielo", imagen:"azulcielo.png", precio: 1050},
  {id:47, vinilo:"Bordo", imagen:"bordo.jpeg", precio: 1050},
  {id:48, vinilo:"Francia", imagen:"francia.png", precio: 1050},
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

  let posicion = colores_carrito.findIndex(itemB => itemB.id === id);
  if (posicion > -1){
    colores_carrito[posicion].cantidad += 1;
  }else{
    const vinilo = buscarColor(id);
    vinilo.cantidad = 1;
    colores_carrito.push(vinilo);
  }

  guardarColoresRemCarrito(colores_carrito);
  actualizarBotonCarrito();
}

function eliminarVinilo(id){
const colores_carrito = cargaColoresRemCarrito();
let posicion= colores_carrito.findIndex(itemA=>itemA.id ===id);
colores_carrito[posicion].cantidad -=1;

if(colores_carrito[posicion].cantidad ==0){
  colores_carrito.splice(posicion,1);
}
guardarColoresRemCarrito(colores_carrito);
renderColoresRemCarrito()
actualizarBotonCarrito();
}

function agregarVinilo(id){
agregarColorLocal(id);
renderColoresRemCarrito();
}


//seccion localStorage carrito

function actualizarBotonCarrito(){

  let contenido = `<button type="button" class="btn btn-success position-relative bloqueAzul">
  Cantidad de material y colores agregados al carrito:
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> ${totalVinilos()}
  </span>
</button>
</div>`;
document.getElementById("botonCompra").innerHTML = contenido;
}

function totalVinilos(){
const colores_carrito = cargaColoresRemCarrito();
return colores_carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
}
function sumaTotal(){
const colores_carrito = cargaColoresRemCarrito();
return colores_carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.precio), 0);

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
          text: "Color Agregado",
          className: "info",
          duration: 4000,
          style: {
            background: "green",
          }
        }).showToast();
      cargaColoresRemCarrito(materialCarrito);
    });
  });
}

// fetch json

fetch('remeras.json')
.then((respuesta) => respuesta.json())
.then((datos) => {
  const resultado1 = document.getElementById("resultado1");
  datos.forEach(valor => {
      //console.log(valor);
      let columna = document.createElement("div");
      columna.className = "col-6";
      let div_padre = document.createElement("div");
      div_padre.className = "card mt-2 p-1 border border-2 border-secondary";
      let div_hijo1 = document.createElement("div");
      div_hijo1.className = "card-header bg-black text-white text-center p-1";
      let div_hijo2 = document.createElement("div");
      div_hijo2.className = "card-body text-center text-muted small";
      let parrafo = document.createElement("p");
      div_hijo1.innerHTML = `${valor.nombre}`;
      parrafo.innerText = valor.descripcion;
      let imagen = document.createElement("img");
      imagen.src = "images/" + valor.imagen;
      imagen.alt = valor.nombre;
      imagen.width = 160;
      imagen.className = "img-fluid";
      div_hijo2.appendChild(parrafo);
      div_hijo2.appendChild(imagen);
      div_padre.appendChild(div_hijo1);
      div_padre.appendChild(div_hijo2);
      columna.appendChild(div_padre);
      resultado1.appendChild(columna);
  });
})

//llamado funciones
guardarColoresRemLS(coloresRemeras);
sumarACarrito();

//eventos de usuario
document.getElementById("botonEnviar").addEventListener("click", agregarDatosClientes);
document.getElementById("botonCantidad").addEventListener("click", agregarDatosClientes);
document.querySelectorAll(".btnAgregado").addEventListener("click", actualizarBotonCarrito);