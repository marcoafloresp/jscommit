//suma de 4 numeros ingresados a un primero.
/* let ingreseNumero = parseFloat(prompt("Ingrese un primer numero"));
for( let i=0; i<3; i++){
    let ingreseNumero2 = parseFloat(prompt("Ingrese 'otro' numero para sumar al primer numero ingresado"));
    let sumaDeNumeros = ingreseNumero + ingreseNumero2;
    console.log(sumaDeNumeros);
} */

//------------------

//concatenado de textos a un primero ingresado, anulando condicion con texto "esc".
/* let ingreseTexto = prompt("Ingrese un texto");
let resultadoIngreso = ingreseTexto;
let textoConcatenado = " ";

while(textoConcatenado.toUpperCase() != "ESC"){
    textoConcatenado = prompt("ingrese 'otro' texto para anadir al primero");
    resultadoIngreso += " " + textoConcatenado;
    console.log(resultadoIngreso);  
} */

//-------------------

//repeticion x veces palabra "Hola".
/* let ingreseNumero3 = parseInt(prompt("Ingrese un numero para repetir 'X' veces la palabra 'Hola'"));
let repeticionesIngresadas = ingreseNumero3;
for(let i=0; i<ingreseNumero3; i++){
    alert("Hola");
}
console.log("el numero ingresado a repetir : " + repeticionesIngresadas + " veces."); */

//ingreso nombre
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = parseInt(prompt("Ingrese su edad:"));
if(edad>=18){
    alert ("Bienvenido: " + nombre +" " + apellido);
}else{
    alert ("Debe ser mayor de edad para ingresar.");
}

//ingreso unidades
let can_remeras = parseInt(prompt("Ingrese la cantidad de remeras que desea: \n(El precio por unidad es de $ 500.)" ));
let precio_remera = 500
var suma_final = precio_remera * can_remeras;

if(can_remeras>10&&can_remeras<50){
    suma_final = suma_final -((suma_final * 5)/100)
    alert ("el total a pagar es de: $ " + suma_final);
}else if(can_remeras>=50){
    suma_final = suma_final -((suma_final * 10)/100)
    alert ("el total a pagar es de: $ " + suma_final);
}else{x
precio_remera = precio_remera * can_remeras;
alert("el precio final es de: $ " + precio_remera)
}

//ingreso variedad
var col_remeras = prompt("ingrese el color de remera que necesita:(negro - blanco - rojo - azul");
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
            alert("Color no disponible");
}
//salida
salida = "Gracias " + nombre + " " + apellido +"\n";
salida += "Su pedido de " + can_remeras + " remeras en color " + col_remeras + " fue agregado. \n";
salida += "El costo final con el descuento incluido si corresponde, es de: $ " + suma_final + "\n";

alert (salida);

