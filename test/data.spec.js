
import { searchFilter, ordenAZPokemon, ordenZAPokemon } from '../src/data.js';


describe('searchFilter', () => {
  it('is a function', () => {
    expect(typeof searchFilter).toBe('function');
  });

  it("Debería regresar el array venasaur", () => {
    const pruebaArray = [{
      "num": "001",
      "name": "bulbasaur"
    },
    {
      "num": "002",
      "name": "ivysaur"
    },
    {
      "num": "003",
      "name": "venusaur"
    }
    ]

    const resultado = [
      {
        "num": "003",
        "name": "venusaur"
      }
    ]
    expect(searchFilter(pruebaArray, "venusaur")).toEqual(resultado)
  });
});

//Test de ordenar A-Z

describe("ordenAZPokemon", () => {
  it('is a function', () => {
    expect(typeof ordenAZPokemon).toBe('function');
  });

  it("Debería regresar el array ordenado de la A a la Z", () => {
    const pruebaOrdenAZ = [{
      "num": "029",
      "name": "nidoran ♀"
    },
    {
      "num": "030",
      "name": "nidorina"
    },
    {
      "num": "031",
      "name": "nidoqueen"
    }
    ]

    const resultado = [
      {
        "num": "031",
        "name": "nidoqueen"
      }, {
        "num": "029",
        "name": "nidoran ♀"
      },
      {
        "num": "030",
        "name": "nidorina"
      }
    ]
    expect(ordenAZPokemon(pruebaOrdenAZ)).toEqual(resultado)
  });
});

//Test de ordenar Z-A

describe("ordenZAPokemon", () => {
  it('is a function', () => {
    expect(typeof ordenZAPokemon).toBe('function');
  });

  it("Debería regresar el array ordenado de la Z a la A", () => {
    const pruebaOrdenZA = [
      {
        "num": "026",
        "name": "raichu"
      },
      {
        "num": "030",
        "name": "nidorina"
      },
      {
        "num": "042",
        "name": "golbat"
      }
    ]

    const resultado = [
      {
        "num": "026",
        "name": "raichu"
      },
      {
        "num": "030",
        "name": "nidorina"
      },
      {
        "num": "042",
        "name": "golbat"
      }
    ]
    expect(ordenZAPokemon(pruebaOrdenZA)).toEqual(resultado)
  });
});