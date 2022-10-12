import pokemon from './data/pokemon/pokemon.js'

let pokeData = pokemon.pokemon
//console.log (pokeData)
let container = document.getElementById("numbers-pokemons")
//container.insertAdjacentHTML("afterbegin" , "<p>Holi moli</p>");

//forEach recorre el array y realiza la funcion sobre cada elemento que lo compone
    let showPokemons= pokeData.forEach ((pokemon) => {
        let data = `<section class="cuadroPokemon"><div class="parteSuperior" id="parteSuperior"> <p class="infoUp" id="num"> ${pokemon.num} </p> <p class= "infoUp" id="region">${pokemon.generation.name}</p> <div class="photoStyle" id="photoStyle"><img src=${pokemon.img} alt="pokemones"></div>
        <h1 class="introCard" id="introCard"> ${pokemon.name} </h1> </div>
        <section class=parteInferior id="parteInferior"><p class "type" id="type"> ${pokemon.type}</p></section>`
       
        container.insertAdjacentHTML("beforebegin", data);

    })

//let type= pokemonCards.filter(pokemon=> pokemon.type == "fire")
//console.log (type)
