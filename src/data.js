
//import data from './data/pokemon/pokemon.js'

export const searchFilter =  (pokemon,nombrePokemon)=> {
  const nameFilter= pokemon.filter (x=>
    x.name.toLowerCase()=== nombrePokemon.toLowerCase())
    ;return nameFilter
  };

  export const ordenAZPokemon=(array)=>{

  return array.sort(function (a, b) {
    
    if (a.name < b.name) {
      return -1;
    }
    if (a.name> b.name) {
      return 1;
    }
   return 0;
  })
};

export const ordenZAPokemon=(array)=>{

  return array.sort(function (a, b) {
    
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
   return 0;
  })
}
  
