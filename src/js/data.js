// estas funciones relizan solo una cosa.

export const filterByType = (nameType, pokemonData) => {
  const filterType = pokemonData.pokemon.filter((pokemon) =>
    pokemon.type.includes(nameType)
  );
  console.log(filterType);
  return filterType;
}

export const filterByGeneration = (nameGeneration, pokemonData) => {
  const filterGeneration = pokemonData.filter(
    (pokemon) => pokemon.generation["name"] === nameGeneration
  );
  console.log(filterGeneration);
  return filterGeneration;
}
