import { filterData } from '../src/data.js';


describe('filterData', () => {

  it('returns `filterData`', () => {
    expect(filterData([
      { age: 10, name: "hola", gender: "male" },
      { age: 10, name: "hola", gender: "female" },
      { age: 10, name: "hola", gender: "male" },
      { age: 10, name: "hola", gender: "male" }
    ], "gender")).toEqual(["male", "female"]);
  });
});
