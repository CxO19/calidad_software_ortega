const {sumaPar} = require('./sumaPar');

describe('Promedio Array', () => {
    test('Happy path: n=[5,5,5]=> 5', () => {
        expect(sumaPar([5,5,5])).toBe(0);
    })
    test('Happy Path: n=[6,6,6]=> 6', () => {
        expect(sumaPar([6,6,6])).toBe(3);
    });
    test('Happy Path: n=[4,5,6,7,8]=> 6', () => {
        expect(sumaPar([4,5,6,7,8])).toBe(3);
    });
    test('Sad path: n = 0 invalido', () => {
        expect(() => sumaPar([])).toThrow('n debe ser un arreglo no vacío');
        expect(() => sumaPar([0])).toThrow('n debe ser un arreglo no vacío');
    })

});