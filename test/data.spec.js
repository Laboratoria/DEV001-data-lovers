import { filterByType } from '../src/js/data.js';

let randomArrayToTestTheTest=[
  {
    num:  "001",
    name: "bulbasaur",
    type: ["grass",
    "poison"]
  },
  {
    num: "010",
    name: "caterpie",
    type: "bug",
  },
  {
    num: "011",
    name: "metapod",
    type: "bug"
  },
  {
    num: "037",
    name: "vulpix",
    type: "fire"
  },
  {
    num: "081",
    name: "magnemite",
    type: "electric"
  }
]

let bugPokemon=[{
  num:  '010',
  name: 'caterpie',
  type: 'bug',
},
{
  num: "011",
  name: "metapod",
  type: "bug"
}
]


describe('filterByType', () => {
  it('es una function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns an array of objects containing only the pokemon with the correct type', () => {
    expect(filterByType("bug", randomArrayToTestTheTest)).toEqual(bugPokemon);
  });

});

