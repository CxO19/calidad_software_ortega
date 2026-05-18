function notaPrueba(nota) {
    if (typeof nota !== 'number' || Number.isNaN(nota))
        throw new TypeError('Nota invalida');
    if (nota < 0 || nota > 10)
        throw new RangeError('Nota invalida');

    if (nota > 7)
        return 'Aprobado';
    if (nota >= 4)
        return 'Supletorio';
    return 'Reprobado';
}