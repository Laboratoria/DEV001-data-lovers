import pokemonData from './../data/pokemon/pokemon.js';
import showPokemons from './../showCards.js';

let containerForCards = document.getElementById("pokemonsContainer");


const filterPokemonTypes = (nameType)=>{
    const newPokemonArray = pokemonData.pokemon.filter((pokemon) =>
        pokemon.type.includes(nameType)
    ); console.log(newPokemonArray)

    while(containerForCards.childNodes.length > 2){
        containerForCards.removeChild(containerForCards.firstChild);
    };

    //console.log("filtro", newPokemonArray)
    showPokemons(newPokemonArray);
};


/* PRUEBA DE  LUNA
export const filterGeneration = (selection, dataPokemon)=>{
    const generationX = dataPokemon.filter(x => x.pokemonRarity == selection)
   console.log(generationX)
    
    return generationX
} */


//console.log("filtro", pokemon.type)
export default filterPokemonTypes;