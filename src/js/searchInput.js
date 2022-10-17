const searchInputName = document.getElementById("input-search-name");

const searchInput = {
  searchPokemonByName: (arrayContainerCards, arrayNamePokemons) => {
    searchInputName.addEventListener("input", () => {
      arrayNamePokemons.forEach((name, index) => {
        if (
          !name.innerText
            .toLowerCase()
            .includes(searchInputName.value.toLowerCase())
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
