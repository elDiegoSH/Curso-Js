

let juegos = ['Mario 1', 'Mario World', 'Tortugas Ninja']

// INDICA EL NUMERO DE ELEMENTOS EN UN ARREGLO
console.log('Total:', juegos.length)
console.log('Primero:', juegos[0])
console.log('Ultimo:', juegos[juegos.length-1])

// BARRER O PASAR POR TODOS LOS ELEMENTOS DEL ARREGLO
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
} );

// AÑADIR NUEVO ELEMENTO AL FINAL DEL ARREGLO
let nuevaLongitud = juegos.push('Mortal Kombat');
console.log({nuevaLongitud, juegos});

// AÑADIR NUEVO ELEMENTO AL INICIO DEL ARREGLO
nuevaLongitud = juegos.unshift('Cobra');
console.log({nuevaLongitud, juegos});

// ELIMINAR EL ULTIMO ELEMENTO DEL ARREGLO
// juegoBorrado = juegos.pop();
// console.log({juegoBorrado, juegos})

// BORRAR ELEMENTO EN LUGAR ESPECIFICO
// let pos = 1; // declarando valor a eliminar
// let juegosBorrados = juegos.splice(pos,2)
// console.log(juegosBorrados)

// SABER EN QUE POSICION ESTA UN ELEMENTO
let buscarIndex = juegos.indexOf('Mortal Kombat');
console.log({buscarIndex});