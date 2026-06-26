
let personaje = {
    nombre: 'Diego',
    edad: 41,
    sexo: 'masculino',
    codigoPostal: 1540,
    trajes: ['Mark I', 'Mark II', 'Hulkbuster']
}; 
// IMPRIMIR NOMBRE
console.log('Nombre:', personaje.nombre);

// CONOCER EL TOTAL DE OBJETOS
console.log(personaje.trajes.length);

// IMPRIMIR DINAMICAMENTE EL ULTIMO ELEMENTO
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length-1] )


// MAS DETALLES DE LOS OBJETOS

// BORRAR UNA PROPIEDAD DEL OBJETO
//delete personaje.edad;
//console.log(personaje);

// MANEJAR EL OBJETO EN PARES
const entriesPares = Object.entries(personaje);
console.log(entriesPares);