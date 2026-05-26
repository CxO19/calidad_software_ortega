const { sumaHasta } = require('./sumaHasta');

describe('sumaHasta', () => {
    test('Happy path: 5 => 15', () => {
        expect(sumaHasta(5)).toBe(15);
    })
    test('Happy Path: n = 1 => 1', () => {
        expect(sumaHasta(5)).toBe(15);
    })
    test('Sad path: n = 0 invalido', () => {
        expect(() => sumaHasta(0)).toThrow('n debe ser un entero');
        expect(() => sumaHasta(2.6)).toThrow('n debe ser un entero');
        expect(() => sumaHasta('10')).toThrow('n debe ser entero');
    })

});