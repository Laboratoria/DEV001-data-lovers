
import { searchFilter, ordenAzPokemon } from '../src/data.js';


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

//test de ordenar A_Z
describe("ordenAzPokemon", () => {
  it('is a function', () => {
    expect(typeof ordenAzPokemon).toBe('function');
  });
});