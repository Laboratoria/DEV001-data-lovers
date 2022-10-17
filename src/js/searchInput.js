const searchInputName = document.getElementById("input-search-name");

const searchInput = {
  searchPokemonByName: (searchInputName, arrayContainerCards, arrayNamePokemons) => {
    searchInputName.addEventListener("input", () => {
      let a = searchInputName.value.toLowerCase();
      console.log(a)
      const onlyLetters = /^[/^[-_ a-zA-Z]+$/;
      const nameValidate = onlyLetters.test(a);
      if (nameValidate == true) {
        document.getElementById("adviceError").classList.add("noError")
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
  }
      else {
    document.getElementById("adviceError").classList.remove("noError");
  }


});
      
     

















   
  },
}


export default searchInput;
