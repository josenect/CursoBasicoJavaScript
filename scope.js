

var miNombre = 'Jose';  //scope global

function nombre() { //scope local

    var miApellido= 'Rodrigez';
    console.log(miNombre + ' '+ miApellido);
}
// no existe problema por que la variable esta global
nombre();

// la variable no es accesible por que esta en un scope local
console.log(miApellido);