/*Un arreglo de tres elementos, for y luego promedio */

const { promHasta } = require('./promHasta');

describe('promHasta', () => {
    test('Happy path: Arreglo de tres elementos', () => {
        expect(promHasta([3, 5, 7])).toBe(5);
    })
    test('Happy Path: Arreglo de uno solo', () => {
        expect(promHasta([3])).toBe(3);
    })
    test('Sad path: Arreglo vacío', () => {
        expect(() => promHasta([])).toThrow('El arreglo no puede estar vacío');
        expect(() => promHasta([0])).toThrow('El arreglo no puede estar vacío');
    })

});