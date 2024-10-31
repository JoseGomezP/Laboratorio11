//Ejercicio 1

//Ejercicio 2

//Ejercicio 3
let montoTotal = parseFloat(prompt("Digite el monto total de su compra: "));
let descuento = 0.0; let flat = false;
if(montoTotal > 100){
    descuento = montoTotal - (montoTotal * 0.1);
    flat = true;
}else{
    console.log("No aplica descuento.");
}
if(flat){
    console.log("El descuento fue de: ", descuento);
}
//Ejercicio 4 
console.log("--Adivina el numero--");
console.log("Muy buenas mi buen samariteno tienes que digitar un numero entre 1 y 10");
