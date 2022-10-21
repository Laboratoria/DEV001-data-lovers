let container = document.getElementById("numbers-pokemons");

//forEach recorre el array y realiza la funcion sobre cada elemento que lo compone
export let showPokemons = (data) => {
  container.innerHTML= " ";

  data.forEach((pokemon) => {
    let dataPokemon = `<section class="cuadroPokemon">
  <div class="parteSuperior" id="parteSuperior"> 
  <div class = "container-num-region">
  
  <span class="infoleft" id="num">
  <img id ="pokebola" src="./assets/icons/pokebola.png"><span class="space"> </span>${pokemon.num //añadi un span entre la pokebola y numero para separar
      } </span> 
  <span class= "infoUp" id="region" data-id= ${pokemon.num}>${pokemon.generation.name}</span> 
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
  
      container.insertAdjacentHTML("beforeend", dataPokemon);
  
  });

};