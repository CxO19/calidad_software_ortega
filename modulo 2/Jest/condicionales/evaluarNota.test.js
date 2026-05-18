const {notaPrueba} = require('./esPar');

describe('notaPrueba', () => {
    test('Nota mayor a 7 => Aprobado', () => {
        expect(notaPrueba(8)).toBe('Aprobado');
    });
    test('Nota 7 => Supletorio', () => {
        expect(notaPrueba(7)).toBe('Supletorio');
    });
    test('Nota entre 4 y 7 => Supletorio', () => {
        expect(notaPrueba(5)).toBe('Supletorio');
    });
    test('Nota menor a 4 => Reprobado', () => {
        expect(notaPrueba(3)).toBe('Reprobado');
    });
    test('Nota invalida negativa lanza error', () => {
        expect(() => notaPrueba(-1)).toThrow('Nota invalida');
    });
    test('Nota invalida tipo string lanza error', () => {
        expect(() => notaPrueba('7')).toThrow('Nota invalida');
    });
});