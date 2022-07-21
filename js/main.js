let bienvenida =  "Bienvenido/a, a continuacion le pediremos sus datos para avanzar en su pedido:"
alert (bienvenida);
function ingresoDatos (){
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad>=18){
        alert("Bienvenido " + nombre + " " + apellido + ".");
        
let can_remeras = parseInt(prompt("Ingrese la cantidad de remeras que desea: \n(El precio por unidad es de $ 500.)" ));

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


//ingreso variedad
var col_remeras = prompt("Ingrese el color de remera que necesita:\nEl stock disponibles es el siguiente: negro / blanco / rojo / azul");
    switch(col_remeras.toLowerCase()){
    case "negro":
        alert ("Color de remera 'Negro' elegida");
        break;
    case "blanco":
            alert("Color de remera 'Blanca' elegida");
        break;
    case "rojo":
            alert("Color de remera 'Rojo' elegida");
        break;
    case "azul":
            alert("Color de remera 'Azul' elegida")
        break;
    default:
            alert("Color no disponible, por favor continue y realice su pedido en caja para otra alternativa a la elegida.");
    }


salida = "Gracias " + nombre + " " + apellido +"\n";
salida += "Su pedido de " + can_remeras + " remeras en color " + col_remeras + " fue agregado. \n";
salida += "El costo final con el descuento incluido si corresponde, es de: $ " + suma_final + "\n";

alert (salida);
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
}
ingresoDatos();
