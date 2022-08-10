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

}


document.getElementById("botonEnviar").addEventListener("click", agregarDatosClientes);
document.getElementById("botonCantidad").addEventListener("click", agregarDatosClientes);