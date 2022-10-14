const searchInput = {
  searchPokemonByName: (inputSearch, arrayContainerCards, arrayNamePokemons) => {
    inputSearch.addEventListener("input", () => {
      arrayNamePokemons.forEach((name, index) => {
        if (
          !name.innerText
            .toLowerCase()
            .includes(inputSearch.value.toLowerCase())
        ) {
          arrayContainerCards[index].classList.add("hideCard");
        } else {
          arrayContainerCards[index].classList.remove("hideCard");
        }
      });
    });
  },
};


export default searchInput;
