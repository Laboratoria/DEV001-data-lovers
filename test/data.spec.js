import { sortPelis } from '../src/data.js';

let sortData = [
{
  title: "Castle in the Sky",
},
{
  title: "Kiki's Delivery Service",
},
];
let sortDataAZ = [
  {
    title: "Castle in the Sky",
  },
  {
    title: "Kiki's Delivery Service",
  },
  ];
  let sortDataZA = [
    {
      title:"Kiki's Delivery Service",
    },
    {
      title: "Castle in the Sky",
    },
  ];
describe('sortPelis', () => {
  it('Es una funcion', () => {
    expect(typeof sortPelis).toBe('function');
  });

  it('Debe retornar las películas de ordenadas de A-Z', () => {
    expect(sortPelis(sortData)).toEqual(sortDataAZ);
  });
  
  it('Debe retornar las peliculas de Z-A', () => {
    expect(sortPelis(sortData).reverse()).toEqual(sortDataZA);
  })
});


