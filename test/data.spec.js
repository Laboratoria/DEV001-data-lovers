import { filterByHouse, filterByGender, getbooks, getcharacters} from '../src/data.js';

//primer test para saber si la funciona general (filtro de casas) funciona
describe('Estos personajes pertenecen a una casa', () => {
  it('is a function', () => {
    expect(typeof filterByHouse).toBe('function');
  });

  //especificamos que nos retorne un objeto especíco de una casa especificada
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
    expect(filterByHouse(arrayHufflepuf, "Hufflepuff")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          house: "Hufflepuff"
        })
      ])
    );
  });

  //it ...

});

describe('Estos personajes pertenecen a una género', () => {
  it('is a function', () => {
    expect(typeof filterByGender).toBe('function');
  });

  //especificamos que nos retorne un objeto especíco de una casa especificada
  it('devuelve un objeto de un género determinado', () => {

    const arrayMale = [{
        "name": "Hermione Granger's father",
        "gender": "Male",
      },
      {
        "name": "Rubeus Hagrid",
        "gender": "Male",
      },
      {
        "name": "Draco Malfoy",
        "gender": "Male",
      }]

    //con esta funcion recorre todo desde el array, luego el objeto y finalmente el elemento
    expect(filterByGender(arrayMale, "Male")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          gender: "Male"
        })
      ])
    );
  });

  //it ...

})
  
describe('Estos books pertenecen a una data', () => {
  it('is a function', () => {
    expect(typeof getbooks).toBe('function');
  });

  //especificamos que nos retorne un objeto especíco
  it('devuelve un array de la data', () => {

    const arrayBooks = [{
      characters: [
        {
          "id": 1,
          "name": "Harry Potter",
        }],
      books: [
        {
          "id": 1,
          "title": "Harry Potter and the Sorcerer's Stone",
        }],
      "id": 2,
      "title": "Harry Potter and the chamber of secrets",
    }];

    //con esta funcion recorre todo desde el array
    expect(getbooks(arrayBooks, "books")).toEqual(
      
    );
  });
})

describe('Estos personajes pertenecen a la data', () => {
  it('is a function', () => {
    expect(typeof getcharacters).toBe('function');
  });

  //especificamos que nos retorne un array específico
  it('devuelve el array characters', () => {

    const arrayCharacters = [{
      characters: [
        {
          "id": 1,
          "name": "Harry Potter",
        },
        {
          "id": 2,
          "name": "Ronald Weasley",
        }],
      
      books: [
        {
          "id": 1,
          "title": "Harry Potter and the Sorcerer's Stone",
        }]
      }];

    //con esta funcion recorre todo desde el array
      expect(getcharacters(arrayCharacters, "characters")).toEqual(

    );
  });
})

// describe('Estos personajes se ordenan de la A a la Z', () => {
//   it('is a function', () => {
//     expect(typeof sortByNameAz).toBe('function');
//   });

//   //especificamos que nos retorne objetos específicos y que los ordene de la A a la Z
//   it('devuelve un objeto ordenado de la A a la Z', () => {

//     const arraySortAz = getData(data).sort(((a, b) => {
//       [
//         {
//           "name": "Hermione Granger's father",
//           "gender": "Male",
//         },
//         {
//           "name": "Rubeus Hagrid",
//           "gender": "Male",
//         },
//         {
//           "name": "Draco Malfoy",
//           "gender": "Male",
//         }]
//     }));

//     //con esta funcion recorre todo desde el array, luego el objeto y finalmente el elemento para ordenarlo de la A a la Z
//     expect(sortByNameAz(getData(data).toEqual(arraySortAz)
      
//     ),
//     );
//   }
//   )
// })
