function sumaHasta(n) {
    if (!Number.isInteger(n) || n < 1) throw new TypeError('n debe ser un entero');
    let total = 0;
    for (let i = 1; i <= n; i++) total += i;
    return total;
}
module.exports = { sumaHasta };

