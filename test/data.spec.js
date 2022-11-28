import { filtroPokeKanto, filtroPorTipo, ordenAZ, searchFilter } from '../src/data.js';

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

const ordenDePokemon = [{
        "num": "001",
        "name": "bulbasaur",
    },
    {
        "num": "006",
        "name": "charizard",
    },
    {
        "num": "063",
        "name": "abra"
    }
];

describe('queremos testear sort, que ordene de AZ/ZA', () => {
    it('Al recorrer el nuevo array ordene desde la A a la Z', () => {
        expect(ordenAZ(ordenDePokemon, "AZ")).toEqual(

            [{
                    "num": "063",
                    "name": "abra"
                },

                {
                    "num": "001",
                    "name": "bulbasaur"
                },

                {
                    "num": "006",
                    "name": "charizard"
                }
            ]
        )
    });
});

it('Al recorrer el nuevo array ordene desde la Z a la A', () => {
    expect(ordenAZ(ordenDePokemon, "ZA")).toEqual(
        [{
                "num": "006",
                "name": "charizard"
            },

            {
                "num": "001",
                "name": "bulbasaur"
            },

            {
                "num": "063",
                "name": "abra"
            }
        ]
    )
});

it('El usuario no ingresa nada así que devuelve el array sin modificar', () => {
    expect(ordenAZ(ordenDePokemon, "")).toEqual(ordenDePokemon)
});

const busquedaPokemon = [{
        "name": "charizard"
    },

    {
        "name": "wartortle"
    },

    {
        "name": "pikachu"
    }
];


describe('queremos testear la función searchFilter', () => {
    it('dependiendo del nombre que ingrese el usuario, la función trae el pokemon que contenga el input', () => {
        expect(searchFilter(busquedaPokemon, "pikachu")).toEqual(

            [{
                "name": "pikachu"
            }]
        )
    });
});