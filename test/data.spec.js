import { filtrargenero, filtrarcasas, ordenAZ, ordenZA, getCharacters, getSpells, getPotions } from '../src/data.js';
import data from '../src/data/harrypotter/data.js';


describe('Estos personajes pertenecen a un genero', () => {
  it('is a function', () => {
    expect(typeof filtrargenero).toBe('function');
  });

  it('devuelve un objeto de genero', () => {
    const arrayMale = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",

      },
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "birth": "between 1 September 1982and 31 August 1983",
        "death": null,
        "species": "Human",
        "ancestry": null,
        "gender": "Male",

      },
      {
        "id": 3,
        "name": "African prince",
        "birth": null,
        "death": null,
        "species": "Human",
        "ancestry": "Muggle-born or half-blood (possibly)",
        "gender": "Male",

      },
    ]
    expect(filtrargenero(arrayMale, "Male")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          gender: "Male"
        })
      ])
    );
  });
})





describe('Estos personajes pertenecen a una casa', () => {
  it('is a function', () => {
    expect(typeof filtrarcasas).toBe('function');
  });


  it('devuelve un objeto de una casa determinada', () => {

    const arrayHufflepuf = [{
      "name": "Harry Potter",
      "house": "Gryffindor",
    },
    {
      "name": "Zacharias Smith",
      "house": "Hufflepuff",
    },
    {
      "name": "Helga Hufflepuff",
      "house": "Hufflepuff",
    }]

    //con esta funcion recorre todo desde el array, luego el objeto y finalmente el elemento
    expect(filtrarcasas(arrayHufflepuf, "Hufflepuff")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          house: "Hufflepuff"
        })
      ])
    );
  });


});

describe('Ordenar de la A-Z', () => {

  it('is a function', () => {
    expect(typeof ordenAZ).toBe('function');
  });


  it('deberia de retornar un array ordenado de la A a la Z ', () => {
    const nombreAZ =
      [{ "name": "Ageing Potion" }, { "name": "Fire Protection Potion" }, { "name": "Erumpent Potion" }]
    const resultado =
      [{ "name": "Ageing Potion" }, { "name": "Erumpent Potion" }, { "name": "Fire Protection Potion" }]

    expect(ordenAZ(nombreAZ)).toEqual(resultado)

  })
});

describe("Ordenar de Z-A", () => {
  it('is a function', () => {
    expect(typeof ordenZA).toBe('function');
  });


  it('deberia de retornar un array ordenado de la Z a la A ', () => {
    const nombreZA =
      [{ "name": "Ageing Potion" }, { "name": "Fire Protection Potion" }, { "name": "Erumpent Potion" }]
    const resultado =
      [{ "name": "Fire Protection Potion" }, { "name": "Erumpent Potion" }, { "name": "Ageing Potion" }]
    //lo que se espera
    expect(ordenZA(nombreZA)).toEqual(resultado)

  })
});

describe('getpersonajes', () => {
  it('Debería ser una funcion', () => {
    expect(typeof getCharacters).toBe('function');
  });

  it('return `array`', () => {
    expect(getCharacters(data)).toHaveLength(707);
  });
});

describe('gethechizos', () => {
  it('Debería ser una funcion', () => {
    expect(typeof getSpells).toBe('function');
  });

  it('return `array`', () => {
    expect(getSpells(data)).toHaveLength(305);
  });
});
//Mostrar todo la data
describe('getPosiciones', () => {
  it('Debería ser una funcion', () => {
    expect(typeof getPotions).toBe('function');
  });

  it('return `array`', () => {
    expect(getPotions(data)).toHaveLength(150);
  });
});