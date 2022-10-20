// estas funciones relizan solo una cosa.

export const filterByType = (nameType, pokemonData) => {
  const filterType = pokemonData.pokemon.filter((pokemon) =>
    pokemon.type.includes(nameType)
  );
  console.log(filterType);
  return filterType;
};

export const filterByRegion = (selection, pokemonData) => {
  const filteredRegion = pokemonData.filter(
    (pokemon) => pokemon.generation.name == selection
  );
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
    console.log(pokemonSort);
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
