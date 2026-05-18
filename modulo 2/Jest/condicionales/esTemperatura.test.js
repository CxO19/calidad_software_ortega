const {esTemperatura} = require('./esTemperatura');

describe('esTemperatura', () => {
    test('Temperatura mayor a 30 => Calor', () => {
        expect(esTemperatura(31)).toBe('Calor');
    });
    test('Temperatura entre 15 y 30 => Templado', () => {
        expect(esTemperatura(20)).toBe('Templado');
    });
    test('Temperatura menor a 15 => Frio', () => {
        expect(esTemperatura(10)).toBe('Frio');
    });
});