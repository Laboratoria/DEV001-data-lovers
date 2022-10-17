import dataPokemon from "./../data/pokemon/pokemon.js";
import showCards from "./../showCards.js";

let containerFather= document.getElementById("pokemonsContainer");
console.log(containerFather.childNodes)

const filteredPokemons= (name) => {
    const newPokemons = dataPokemon.pokemon.filter((pokemon)=>
        pokemon.type.includes(name)
    )   //console.log("filtro", newPokemons)

    while (containerFather.childNodes.length > 2) {
        containerFather.removeChild(containerFather.firstChild);
      }
      
      showCards(newPokemons);
    
}


export default filteredPokemons;