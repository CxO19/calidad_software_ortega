function puedeConducir(edad) {
    if(!Number.isInteger(edad))
        throw new TypeError('Edad invalida');
    if(edad < 0)
        throw new RangeError('Edad invalida');
    return edad >= 18 ? 'Si' : 'No';
}

module.exports = {puedeConducir};

/*

*/