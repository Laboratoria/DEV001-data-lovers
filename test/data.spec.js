import { sortPelis , filterDirector } from '../src/data.js';

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

// test para filterDirector 
let filtradosDirector =[
  {
    title: "Castle in The Sky",
    director: "Hayao Miyazaki",
  },
  {
    title:"When Marnie Was There",
    director: "Hiromasa Yonebayashi",
  }, 
  {
    title:"Kiki's Delivery Service",
    director: "Hayao Miyazaki",
  },
];
let Hayao =[
  {
    title: "Castle in The Sky",
    director: "Hayao Miyazaki",
  },
  {
    title:"Kiki's Delivery Service",
    director: "Hayao Miyazaki",
  },
];

describe("filterDirector", () => {
 it ("Es una funcion", () => {
  expect (typeof filterDirector).toBe("function");
 });
 it ("retorna una array solo con las peliculas del director HAYAO",() => {
  expect(filterDirector(filtradosDirector,"Hayao Miyazaki")).toEqual(Hayao);
 })
});

//test filterGender





