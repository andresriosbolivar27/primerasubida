const {estudiante,obtenerPromedio} = require('./calculo')
const fs = require('fs');
console.log("El nombre del estudiante es "+ estudiante.nombre);
console.log("El promedio del estudiante es: " + obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));



//Destructuracion
let {nombre,edad,notas: {matematicas,ingles,programacion}} = estudiante;

console.log("El nombre del estudiate es: " + nombre);
console.log('El promedio del estudiate es: ' + obtenerPromedio(matematicas,ingles,programacion));

//Filesystem
let crearArchivo = (estudiante)=>{
    texto = 'El nombre del estudiante es: ' + nombre +
            '\nha obtenido un promedio de:  ' + obtenerPromedio(matematicas,ingles,programacion);

    fs.writeFile('promedio.txt',texto,(err)=>{
        if(err) throw (err);
        console.log('Se ha creado el archivo')
    });
}
crearArchivo(estudiante);