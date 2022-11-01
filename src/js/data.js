// estas funciones relizan solo una cosa.

export const filterByType = (nameType, pokemonData) => {
  const filterType = pokemonData.filter((pokemon) =>
    pokemon.type.includes(nameType)
  );
  //console.log(filterType);
  return filterType;
};

export const filterByRegion = (selection, pokemonData) => {
  const filteredRegion = pokemonData.filter(
  (pokemon)=> pokemon.generation.name == selection);
  return filteredRegion;
};

//*aqui va el sort*/

export const sortPokemons = (pokemonData) => {
  let copyData = [...pokemonData];
  const pokemonSort = copyData.sort((prev, next) => {
    if (prev.name > next.name) {
      return 1;
    } else if (prev.name < next.name) {
      return -1;
    } else {
      return 0;
    }
    
  });
  return pokemonSort;
};

export const sortPokemonsInvertido = (pokemonData) => {
  let copyData = [...pokemonData]; // dentro de un array copia todo lo que esta en data.
  const pokemonSort = copyData.sort((next, prev) => {
    if (prev.name > next.name) {
      return 1;
    } else if (prev.name < next.name) {
      return -1;
    } else {
      return 0;
    }
  });
  return pokemonSort;
};


export const sortNumber = (pokemonData)=>{
  const sortByNumber= pokemonData.sort((min,max)=>{
    if(min.num < max.num){
      return -1
    } if (min.num > max.num){
      return 1
    } return 0
  });
  return sortByNumber
};

export const sortNumberInverted = (pokemonData)=>{
  const sortByNumber= pokemonData.sort((min,max)=>{
    if(min.num < max.num){
      return 1
    } if (min.num > max.num){
      return -1
    } return 0
  });
  return sortByNumber
};


//*aqui va el find*/

export const findById = (id, pokemonData) => {
  const findbyidPokemon = pokemonData.find(
  (pokemon)=> pokemon.num == id);
  //console.log(findbyidPokemon);
  return findbyidPokemon;
};
