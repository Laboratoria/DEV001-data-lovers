import { filtroPokeKanto } from '../src/data.js';

const primeraGeneracion = [{
    "num": "001",
    "name": "bulbasaur",
    "generation": {
        "num": "generation i",
        "name": "kanto"
    }
}, {
    "num": "178",
    "name": "xatu",
    "generation": {
        "num": "generation ii",
        "name": "johto"
    }
}];

describe('queremos testear el filtro de pokeKanto', () => {
    it('al recorrer el array esta función filtre los pokemones de Kanto', () => {
        expect(filtroPokeKanto(primeraGeneracion)).toEqual([{
            "generation": {
                "name": "kanto",
                "num": "generation i",

            },
            "name": "bulbasaur",
            "num": "001",

        }]);

    });

    // it('returns `example`', () => {
    //     expect(example()).toBe('example');
    // });
});


// describe('anotherExample', () => {
//     it('is a function', () => {
//         expect(typeof anotherExample).toBe('function');
//     });

//     it('returns `anotherExample`', () => {
//         expect(anotherExample()).toBe('OMG');
// });
// });