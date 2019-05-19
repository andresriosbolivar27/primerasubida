let estudiante = {
    nombre: 'Juan',
    edad:25,
    notas: {
        matematicas:3,
        ingles: 4,
        programacion: 5
    }
};

let obtenerPromedio = (nota1,nota2,nota3) => (nota1+nota2+nota3) / 3;

console.log(obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));

module.exports = {
    estudiante,
    obtenerPromedio
};