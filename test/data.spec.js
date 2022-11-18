import { filtroPokeKanto, filtroPorTipo } from '../src/data.js';

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
            "num": "001",
            "name": "bulbasaur",
            "generation": {
                "num": "generation i",
                "name": "kanto"
            }
        }]);
    });

    // it('returns `example`', () => {
    //     expect(example()).toBe('example');
    // });
});

const tiposDePokemon = [{
        "num": "006",
        "name": "charizard",
        "pokemon-rarity": "normal",
        "type": [
            "fire",
            "flying"
        ]
    },

    {
        "num": "008",
        "name": "wartortle",
        "pokemon-rarity": "normal",
        "type": [
            "water"
        ]
    }
];


describe('queremos testear filtro x tipo', () => {
    it('Al recorrer el nuevo array, éste filtre dependiendo de lo que elija el usuario (el tipo)', () => {
        expect(filtroPorTipo(tiposDePokemon, "fire")).toEqual([{
            "num": "006",
            "name": "charizard",
            "pokemon-rarity": "normal",
            "type": [
                "fire",
                "flying"
            ]
        }])
    });
});