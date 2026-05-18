const {esPar} = require('./esPar');

describe('puedeConducir', () => {
    test('Happy path: 20 => Si', () => {
        expect(puedeConducir(20)).toBe('Si');
    });
    test('Happy path: 16 => No', () => {
        expect(puedeConducir(16)).toBe('No');
    });
    test('Sad path: n debe ser entero', () => {
        expect(() => puedeConducir(-1)).toThrow('edad invalida')
        expect(() => esPar('18')).toThrow('n debe ser entero')
    });
});