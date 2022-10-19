import { filterGender, orden, filterStatus} from '../src/data.js';

const originalData = {
  "info": {
      "count": 493,
      "pages": 25,
      "next": "https://rickandmortyapi.com/api/character/?page=2",
      "prev": ""
  },
  "results": [
      {
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
          },
        },
      {
          "id": 3,
          "name": "Summer Smith",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Female",
          "origin": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          }
        }
  ]
};
const data = originalData.results;
 

// filterGender
describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('returns personajes mujeres cuando selecciona`Female`', () => {
    expect(filterGender(data, "Female")).toStrictEqual(data.filter(item => item.gender === "Female"));
  });
// Check test
//   it('matches if the actual object contain expected key: value pairs', () => {
//     expect(data).toHaveProperty(['gender', 'Female']);
// });
});

// filterStatus
describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  it('returns personajes vivos cuando selecciona`Alive`', () => {
    expect(filterStatus(data, "Alive")).toStrictEqual(data.filter(item => item.status === "Alive"));
  });
  
});
// método sort (A-Z)
describe('orden', () => {
  it('is a function', () => {
    expect(typeof orden).toBe('function');
  });

  it('returns true si la función orden() ordena `name` de forma ascendente', () => {
    expect(orden(data)).toStrictEqual(data.sort(data.name));
  });
});

// método sort (Z-A)
describe('sortOrdenZ', () => {
  it('is a function', () => {
    expect(typeof orden).toBe('function');
  });

  it('returns true si la función sortOrdenZ() ordena `name` de forma descendente', () => {
    expect(orden(data)).toStrictEqual(data.sort(data.name).reverse());
  });
});