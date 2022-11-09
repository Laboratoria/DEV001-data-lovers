//import pokemon from './data/pokemon/pokemon.js';export const searchFilter =  (pokemon,nombrePokemon)=> {
  export const searchFilter =  (pokemon,nombrePokemon)=> {
    const nameFilter= pokemon.filter (x=>
      x.name.toLowerCase()==nombrePokemon.toLowerCase())
  
      
    ;return nameFilter
  
  
  };
  


/*export const searchFilter =  (pokemon,nombrePokemon)=> {
  const nameFilter= pokemon.filter (x=>
    x.name.toUpperCase()==nombrePokemon.toUpperCase())

    
  ;return nameFilter


};*/


/*export const ordenAzPokemon=(array)=>{

  return array.sort(function (a, b) {
    
    if (a.name < b.name) {
      return -1;
    }
    if (a.name> b.name) {
      return 1;
    }
   return 0;
  })
  
  
}


// estas funciones son de ejemplo
/*export const pokemon = () => {
  return 'pokemon';
};
export const anotherExample = () => {
  return 'OMG';
};*/


//const pokemon = 

// FILTRADO POR NOMBRE
