import pokemon from "./data/pokemon/pokemon.js";

let pokeData = pokemon.pokemon;
//console.log (pokeData)
let container = document.getElementById("numbers-pokemons");
//container.insertAdjacentHTML("afterbegin" , "<p>Holi moli</p>");

//forEach recorre el array y realiza la funcion sobre cada elemento que lo compone
let showPokemons = (option) => {
  const pokemons = option || pokeData;
  pokemons.forEach((pokemon) => {
    let data = `<section class="cuadroPokemon">
  <div class="parteSuperior" id="parteSuperior"> 
  <div class = "container-num-region">
  
  <span class="infoleft" id="num"><img id ="pokebola" src="./assets/icons/pokebola.png">  ${pokemon.num} </span> 
  <span class= "infoUp" id="region">${pokemon.generation.name}</span> 
  </div>
  <section class="photoStyle" id="photoStyle">
  <img id= "img" src=${pokemon.img} alt="pokemones"> 
  <div class = "circle" id= "circle"></div>
  </section>
    <h1 class="introCard" id="introCard"> ${pokemon.name} </h1> 
    </div>
    <section class=parteInferior id="parteInferior">
    <div class="type" id="type" disabled> ${pokemon.type
      .map((type) => `<span class="type-span ${type}" >${type}</span>`)
      .join("")}</div>
    </section>`;

    container.insertAdjacentHTML("beforebegin", data);
  });
};

let filterNames= () =>{
  arrayNamePokemons
}


//let type= pokemonCards.filter(pokemon=> pokemon.type == "fire")
//console.log (type)

export default showPokemons;