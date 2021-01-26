
1//
saludo();

function saludo() {
    console.log("Hola " + nombre);
}
// error de undefined

var nombre;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

var nombre = "Aaron";