function promHasta(numeros) {
    if (!Array.isArray(numeros)) throw new TypeError('n debe ser un arreglo');
    if (numeros.length === 0) throw new Error('El arreglo no puede estar vacío');
    let numero = 0;
    for (let i=0; i<numeros.length; i++) {
        numero += numeros[i]
    }
    return numero / numeros.length;
}
module.exports = { promHasta };

