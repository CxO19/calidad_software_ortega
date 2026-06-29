const { identidad, suma} = require('./identidad');

describe('toBe Igualdad estricta', ()=>{
    test('Happy path: primitivos con toBe', ()=>{
        expect(suma(5,2)). toBe(5);
        expect(identidad('jest')). toBe('jest');
    })
    test('Happy Path: misma referencia con el objeto', ()=>{
        const obj={x:1}
        const mismo = identidad(obj);
        expect(mismo).toBe(obj);
    })
    test('Sad path: 2=> objeto clonado NO es la misma referencia  ', ()=>{
        const obj={x:1}
        const clonado= identidad(obj, {clone: true});
        expect(clonado).not.toBe(obj)
    })
    
    test ('Sad path: ', ()=>{
        expect(()=>suma('2', 3).toThrow('a y b deben ser numeros'))
    })
})

