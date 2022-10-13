import pokemon from "./data/pokemon/pokemon.js";

let pokeData = pokemon.pokemon;
//console.log (pokeData)
let container = document.getElementById("numbers-pokemons");
//container.insertAdjacentHTML("afterbegin" , "<p>Holi moli</p>");

//forEach recorre el array y realiza la funcion sobre cada elemento que lo compone
let showPokemons = pokeData.forEach((pokemon) => {
  let data = `<section class="cuadroPokemon">
  <div class="parteSuperior" id="parteSuperior"> 
  <span class="infoUp" id="num"> ${pokemon.num} </span> 
  <span class= "infoUp" id="region">${pokemon.generation.name}</span> 
  
  <section class="photoStyle" id="photoStyle">
  <img id= "img" src=${pokemon.img} alt="pokemones"> <div class = "circle" id= "circle"></div>
  </section>

    <h1 class="introCard" id="introCard"> ${pokemon.name} </h1> 
    </div>
    <section class=parteInferior id="parteInferior">
    <div class="type" id="type" disabled> ${pokemon.type.map((type) => `<span class="type-span" >${type}</span>`).join('')}</div>
    </section>`;

  container.insertAdjacentHTML("beforebegin", data);
});

//let type= pokemonCards.filter(pokemon=> pokemon.type == "fire")
//console.log (type)
