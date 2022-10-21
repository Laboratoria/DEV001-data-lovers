import { filterGender, orden, filterStatus, filterSpecies, statisticsFrequency, sortOrdenZ} from '../src/data.js';

const originalData = {
  "results": [
      {
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "gender": "Male",
        },
      {
          "id": 2,
          "name": "Morty Smith",
          "status": "Alive",
          "species": "Human",
          "gender": "Male",
      },
      {
          "id": 3,
          "name": "Summer Smith",
          "status": "Alive",
          "species": "Human",
          "gender": "Female",
       },
       {
        "id": 16,
        "name": "Amish Cyborg",
        "status": "Dead",
        "species": "Alien",
        "gender": "Male",
        
    },
  ]
};
const data = originalData.results;
 

// filterGender
describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('returns personajes mujeres cuando selecciona`Female`', () => {
    expect(filterGender(data, "Female")).toStrictEqual([{
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
  }]);
  });

  it('matches si el objeto data contiene la propiedad `gender`', () => {
    expect(filterGender(data, "Female")).toHaveProperty(data, data['gender']);
 });
});

//filterSpecies
describe('filterSpecies', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('returns personajes alien cuando selecciona`Alien`', () => {
    expect(filterSpecies(data, "Alien")).toStrictEqual([{
      "id": 16,
      "name": "Amish Cyborg",
      "status": "Dead",
      "species": "Alien",
      "gender": "Male",
      
  }]);
  });
});
// filterStatus
describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  it('returns personajes muertos cuando selecciona`Dead`', () => {
    expect(filterStatus(data, "Dead")).toStrictEqual([{
      "id": 16,
      "name": "Amish Cyborg",
      "status": "Dead",
      "species": "Alien",
      "gender": "Male",
      
  }]);
  });
  
});
// método sort (A-Z)
describe('orden', () => {
  it('is a function', () => {
    expect(typeof orden).toBe('function');
  });

  // it('returns true si la función orden() ordena `name` de forma ascendente', () => {
  //   expect(orden(data)).toStrictEqual(data.sort(data.name));
  // });
  it('returns true si la función orden() ordena `name` de forma ascendente', () => {
    expect(orden(data)).toBe([
      {
        "id": 16,
        "name": "Amish Cyborg",
        "status": "Dead",
        "species": "Alien",
        "gender": "Male",
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
    },
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
   }

    ]);
  });
});

// método sort (Z-A)
describe('sortOrdenZ', () => {
  it('is a function', () => {
    expect(typeof sortOrdenZ).toBe('function');
  });

  // it('returns true si la función sortOrdenZ() ordena `name` de forma descendente', () => {
  //   expect(sortOrdenZ(data)).toStrictEqual(data.sort(data.name).reverse());
  // });

  it('returns true si la función sortOrdenZ() ordena `name` de forma descendente', () => {
    expect(sortOrdenZ(1)).toStrictEqual([ 
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
     },
     {
       "id": 1,
       "name": "Rick Sanchez",
       "status": "Alive",
       "species": "Human",
       "gender": "Male",
     },
     {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
     },
    {
     "id": 16,
     "name": "Amish Cyborg",
     "status": "Dead",
     "species": "Alien",
     "gender": "Male",
    
}]);
  });
});

// estadísticas -P
describe('statisticsFrequency', () => {
  it('is a function', () => {
    expect(typeof statisticsFrequency).toBe('function');
  });

  it('returns personajes mujeres cuando selecciona`Female`', () => {
    expect(statisticsFrequency(data, filterGender (data, "Female"))).toBe(25);
  });
});