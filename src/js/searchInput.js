const searchInputName = document.getElementById("input-search-name");


const searchInput = {
  searchPokemonByName: (arrayContainerCards, arrayNamePokemons) => {
    searchInputName.addEventListener("input", () => {

      let inputValue = searchInputName.value.toLowerCase();
      const onlyLetters = /^[/^[-_ a-zA-Z]+$/;
      const nameValidate = onlyLetters.test(inputValue);

      if (nameValidate === true || nameValidate === " "){
        arrayNamePokemons?.forEach((name, index) => {
          if (
            !name.innerText
              .toLowerCase()
              .includes(inputValue)
          ) {
            arrayContainerCards[index].classList.add("hideCard");
          } else {
            arrayContainerCards[index].classList.remove("hideCard");
          }
        });

        document.querySelector("#text-error").style.display = "none";

      }else if (nameValidate === false){
        document.querySelector("#text-error").style.display = "flex";
      }

    });
  },
};


export default searchInput;
