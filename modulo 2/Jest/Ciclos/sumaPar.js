/* Sumar pares */

function sumarpar(numeros) {
    if (!Array.isArray(numeros) || numeros.length == 0) 
        {
        throw new Error('n debe ser un arreglo no vacío');
    }

    let contador = 0;
    for (let i=0; i<numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

module.exports = { sumarpar };