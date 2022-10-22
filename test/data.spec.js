import { filterByType, filterByRegion } from '../src/js/data.js';

let randomArrayToTestTheTest=[
  {
    num:  "001",
    name: "bulbasaur",
    type: ["grass",
    "poison"],
    generation: {
      num: "generation i",
      name: "kanto"},
  },
  {
    num: "010",
    name: "caterpie",
    type: "bug",
    generation: {
      num: "generation i",
      name: "kanto"},
  },
  {
    num: "011",
    name: "metapod",
    type: "bug",
    generation: {
      num: "generation i",
      name: "johto"},
  },
  {
    num:"078",
    name: "rapidash",
    type: "fire",
    generation: {
      num: "generation i",
      name: "johto"},
  },
  {
    num: "081",
    name: "magnemite",
    type: "electric",
    generation: {
      num: "generation i",
      name: "johto"},
  }
]

let bugPokemon=[{
  num:  "010",
  name: "caterpie",
  type: "bug",
  generation: {
    num: "generation i",
    name: "kanto"},
},
{
  num: "011",
  name: "metapod",
  type: "bug",
  generation: {
    num: "generation i",
    name: "johto"},
}
]

let firePokemon=[{
  num:"078",
  name: "rapidash",
  type: "fire",
  generation: {
    num: "generation i",
    name: "johto"},
}]

//primeros test, arriba se coloca info de prueba para testear
describe('filterByType', () => {
  it('es una function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns an array of objects containing only the pokemon with the correct type BUG', () => {
    expect(filterByType("bug", randomArrayToTestTheTest)).toEqual(bugPokemon);
  });

  it('returns an array of objects containing only the pokemon with the correct type FIRE', () => {
    expect(filterByType("fire", randomArrayToTestTheTest)).toEqual(firePokemon);
  });

});

// AQUI VAMOS A TESTEAR NUESTRO FILTRO REGION
let filtradosKanto =[
{
  num:  "001",
  name: "bulbasaur",
  type: ["grass",
  "poison"],
  generation: {
    num: "generation i",
    name: "kanto"},
},
{
  num: "010",
  name: "caterpie",
  type: "bug",
  generation: {
    num: "generation i",
    name: "kanto"},
},]

describe('filterByRegion', () => {
  it('es una function', () => {
    expect(typeof filterByRegion).toBe('function');
  });

  it('returns an array of objects containing only the pokemon with the correct region KANTO', () => {
    expect(filterByRegion("kanto", randomArrayToTestTheTest)).toEqual(filtradosKanto);
  });
})


// TEST DE SORT