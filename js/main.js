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

let datoNombre = document.getElementById("nombre");
let datoApellido = document.getElementById("apellido");
datoNombre.style.color = "red";
datoApellido.style.color = "red";
let div1 = document.getElementById("div1");
div1.className = "p-3 bg-dark";
div1.style.color="gray";
div1.innerHTML = headBienvenida();

let seleRem = document.getElementById("seleRem");

let bienvenida =  "Bienvenido/a, a continuacion le pediremos sus datos para avanzar en su pedido:"
alert (bienvenida);

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = parseInt(prompt("Ingrese su edad:"));
/////////// ingreso datos
datoNombre.innerHTML = "Nombre: " + nombre;
datoApellido.innerHTML = "Apellido: " + apellido;
//////////

if (edad>=18){
    alert("Bienvenido " + nombre + " " + apellido + ".");
        
var can_remeras = parseInt(prompt("Ingrese la cantidad de remeras que desea: \n(El precio por unidad es de $ 500.)" ));

let precio_remera = 500
var suma_final = precio_remera * can_remeras;

function descuentoMinorista(){
    return ((suma_final *5)/100)
}
var descuento5 = descuentoMinorista();

function descuentoMayorista(){
    return ((suma_final *10)/100)
}
var descuento10 = descuentoMayorista();

if(can_remeras>10&&can_remeras<50){
    suma_final = suma_final -(descuento5);
    alert ("El total a pagar es de: $ " + suma_final);
}else if(can_remeras>=50){
    suma_final = suma_final -(descuento10);
    alert ("El total a pagar es de: $ " + suma_final);
}else{
precio_remera = precio_remera * can_remeras;
alert("El precio final es de: $ " + precio_remera)
}

// agregado elemento

let canRem = document.createElement("p")
canRem.innerHTML = "Su cantidad elegida es de: " + can_remeras + " unidad/es.";
canRem.className="bg-black text-white p-1";
seleRem.append(canRem);
document.body.appendChild(seleRem);

//ingreso variedad remeras
var col_remeras = prompt("Ingrese el color de remera que necesita:\nEl stock disponibles es el siguiente: negro / blanco / rojo / azul / amarillo / verde / celeste");

const colores = ["negro", "blanco", "rojo", "azul", "amarillo", "verde", "celeste"]
let find= colores.find(x=> x ===col_remeras);
if(find){
    alert("color de remera " + find + " elegida.");
}else{
    alert("color no disponible, por favor continue y realice su pedido en caja para otra alternativa a ;a seleccionada");
}

// agregado arrays

alert ("A continuacion si desea agregue a su pedido el tipo de tinta que desea utilizar para imprimir sus remeras");

const productos = [{item:1, nombre:"Tinta al Agua", precio:60}, {item:2, nombre:"Tinta Plastica", precio:80}, {item:3, nombre:"Tinta Vinilica", precio:70}, {item:4, nombre:"Tinta 3-D", precio:120}, {item:5, nombre:"Tinta Reflectiva", precio:150}, {item:6, nombre:"Tinta Fluorescente", precio:140}
];

//agregado constructor

class Tintas {
    constructor(suministro) {
        this.item = suministro.item;
        this.nombre = suministro.nombre;
        this.precio = suministro.precio;
        this.impuestoGravamen = 10.5;
    }

    impuesto() {
        this.precio = this.precio + ((this.precio * this.impuestoGravamen) / 100);
    }
}

const carrito = [];

function agregarTinta(producto) {
    carrito.push(producto);
    alert ("Tinta adicional agregada.");
    console.log("Tinta adicional agregada.");
    console.log(carrito);
}

function eliminarTinta(item) {
    let pos = carrito.indexOf((elemento) => elemento.item == item);
    carrito.splice(pos, 1);
    alert ("Tinta adicional seleccionada eliminada.");
    console.log("Tinta adicional seleccionada eliminada.");
    console.log(carrito);
}

function buscarTinta(item) {
    return productos.find((elemento) => elemento.item == item);
}

function tintasA_cargar() {
    let salida = "Ingrese el numero correspondiente al tipo de tinta que desea aplicar, luego pulse Cancelar para terminar la carga:\n\n";

    for (let sumser of productos) {
        salida += sumser.item + " - " + sumser.nombre + " : $" + sumser.precio + "\n";
    }

    let id_tintas = 0;

    while (id_tintas != null) {
        let id_tintas = prompt(salida);

        if (id_tintas != null) {
            id_tintas = parseInt(id_tintas);
            let producto = buscarTinta(id_tintas);
            agregarTinta(producto);
        } else {
            break;
        }
    }
}

function tintasA_eliminar() {
    let salida = "";

    if (carrito.length > 0) {
        salida = "Seleccione la tinta a eliminar con su numero correspondiente si lo desea o pulse Cancelar para continuar con el pedido.\n\n";

        for (let producto of carrito) {
            salida += producto.item + " - " + producto.nombre + " : $" + producto.precio + "\n";
        }

        let item_tinta = prompt(salida);

        if (item_tinta != null) {
            item_tinta = parseInt(item_tinta);
            eliminarTinta(item_tinta);
        }

        mostrarProductosCarrito();
    } else {
        salida = "\nTintas seleccionadas:\nNo selecciono ninguna opcion adicional al pedido.\n\nPresiones 'OK' para continuar.";
        alert(salida);
    }    
}

function mostrarProductosCarrito() {
    let salida = "";

    if (carrito.length > 0) {
        salida = "\n\nAgregado de tipo de tintas seleccionadas a imprimir:\n";
        var total_pagar = 0;

        for (let producto_carrito of carrito) {
            let producto = new Tintas(producto_carrito);
            producto.impuesto();
            total_pagar += producto.precio;
            salida += producto.item + " - " + producto.nombre + " : $" + producto.precio + " (Impuestos incluidos)\n";
        }
        
        let sumaFinal = total_pagar * can_remeras;
    
        salida += "\nEl costo final de tintas relativo a las cantidades de remeras ya previamente agregadas es de: $ " + Math.round(sumaFinal);
    } else {
        salida = "\n\n(Recuerde que no selecciono ningun adicional de impresion.)\n\nPresiones 'OK' para continuar."; 
    }

    return salida;
}

tintasA_cargar();
tintasA_eliminar();


let final = suma_final + mostrarProductosCarrito();
salida = "Gracias " + nombre + " " + apellido +"\n";
salida += "Su pedido de " + can_remeras + " remeras en color " + col_remeras + " fue agregado. \n";
salida += "El costo final con el descuento incluido si corresponde es de: $ " + final + "\n";

alert (salida);


// condicional
let ingresoRetiro = alert("Prosiga para recibir su numero y sera atendido.")

//TURNO
let contadorA = 1;
    let contadorB = 1;

    let finalizar = "no";
    while (finalizar.toUpperCase()!= "SALIR"){
        let solicitudDeTurno = prompt(
            "Consumidor Final: (ingrese) 1 \nResponsable Inscripto: (ingrese) 2 \nEscriba 'SALIR' para retirar su numero");
        if(solicitudDeTurno ==1){
            alert ("Su turno, Consum. Final. es el nro. " + contadorA);
            contadorA += 1;
        }else if(solicitudDeTurno ==2){
            alert ("Su turno, Res.Ins. es el nro.: " + contadorB);
            contadorB += 1;
        }else if (solicitudDeTurno.toUpperCase() == "SALIR"){
            finalizar=solicitudDeTurno;
        }else{
            alert("la opcion elegida no es correcta, elija opcion 1 u opcion 2"
            );
        }
    }alert ("Gracias por su visita.");

    }else{
        alert ("Disculpe: " + nombre + " " + apellido + ".\n"+ "Debe ser mayor de edad para poder ingresar.\nGracias por su visita.");
    }