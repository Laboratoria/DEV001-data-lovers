import pokemonData from './../data/pokemon/pokemon.js';
import showPokemons from './../showCards.js';

let containerForCards = document.getElementById("pokemonsContainer");


const filterPokemonTypes = (nameType)=>{
    const newPokemonArray = pokemonData.pokemon.filter((pokemon) =>
        pokemon.type.includes(nameType)
    );

    while(containerForCards.childNodes.length > 2){
        containerForCards.removeChild(containerForCards.firstChild);
    };

    //console.log("filtro", newPokemonArray)
    showPokemons(newPokemonArray);
};

//console.log("filtro", pokemon.type)
export default filterPokemonTypes;