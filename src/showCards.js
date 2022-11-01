let container = document.getElementById("numbers-pokemons");

//forEach recorre el array y realiza la funcion sobre cada elemento que lo compone
export let showPokemons = (data) => {
  container.innerHTML= " ";

  data.forEach((pokemon) => {
    let dataPokemon = `<section class="${pokemon.num} cuadroPokemon">
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


/*Mostrar información de cada pokemon en un modal*/

let containerCharacteristics = document.getElementById("modal-container-features");

export let showPokemonFeature = (objectData) => {
  containerCharacteristics.innerHTML= " ";

  let pokemonFeatures =`<section class="container-features-poke">
  <div class="${objectData.type[0]} childrenOne">
    <section class="container-img-num-name">
    <div class="generationId">
        <span id="id-pokemon">${objectData.num}</span>
        <span id="generation-pokemon">${objectData.generation.name}</span>
        <div class="background"><span class="background"> <img
        src="./assets/images/fondo.png"
        class="fondo"
        id="fondo"
        alt="img-modal"
      />
      </div></div>
      <h2 id="name-pokemon">${objectData.name}</h2>
      <div class="img-pokemon-modal">
        <div>
        <img
        src=${objectData.img}
        class="img-poke"
        id="img-poke"
        alt="img-pokemon"
        />
        <div class = "circleTwo" id= "circleTwo"></div>
      </div>
    </section>
  </div>
  <div class="childrenTwo">
  <section class="about-pokemon">
    ${objectData.about}
  </section>
  <table class="stats-pokemon">
  <tr>
    <th class="title-table">Stats:</th>
    <th class="title-table">Encounter;</th>
    </tr>
    <tr class:"body-table">
    <td class="stats-information"> Base attack: ${objectData.stats["base-attack"]}</td>
    <td class="encounter-information"> Encounter:
    <td class="stats-information"> Base defense: ${objectData.stats["base-defense"]}</td>
    <td class="stats-information"> Base stamina: ${objectData.stats["base-stamina"]}</td>
    </tr>
  </table>
  <div class="resistant-and-weaknesses">
    <div class="resistant">
      <h2>Resistance:</h2>
      <div class="type-resistant" id="resistant-pokemon"> ${objectData.resistant
        .map((type) => `<span class="type-poke ${type}"> ${type} </span>`)
        .join("")}
      </div>
    </div>
    <div class="resistant">
      <h2>Weaknesses:</h2>
      <div class="type-weaknesses" id="weaknesses-pokemon"> ${objectData.weaknesses
        .map((type) => `<span class="type-poke ${type}"> ${type} </span>`)
        .join("")}
      </div>
    </div>
  </div>
  <section class="special-attack">
    <h2>Special Attack:</h2>
    <div class="special-attack-pokemon" id="attack"> ${objectData["special-attack"]
      .map((attack) => `<span class="attack-name"> ${attack.name} </span>`)
      .join("")}
    </div>
  </section>
  <section class="evolution-pokemon">
    <h2>Evolution:</h2>
    <div class="evolution-pokemon-1" id="evolution-1"> 
      ${evolutionsTwo(objectData)}
    </div>
  </section>
  </div>
</section>`

containerCharacteristics.insertAdjacentHTML("beforeend", pokemonFeatures);

}

let evolutionsTwo = (objectData)=>{
  const actual = objectData.evolution;

  if(!actual["next-evolution"] && !actual["prev-evolution"]){
    let notEvolution = `<p>No evolutions</p>`
    //console.log(notEvolution);
    return notEvolution;
  } 

  if(actual["prev-evolution"] && actual["next-evolution"]){
    let nextAndPrevEvolution = `<div class="children-one">
    <h2>Prev Evolution:</h2>
    <p>${actual["prev-evolution"][0].num}</p>
    <p>${actual["prev-evolution"][0].name}</p>
    </div>
    <div class="children-two">
    <h2>Next Evolution:</h2>
    <p>${actual["next-evolution"][0].num}</p>
    <p>${actual["next-evolution"][0].name}</p>
    </div>`

    //console.log(objectData.evolution["prev-evolution"]);
    //console.log(objectData.evolution["next-evolution"]);
    
    return nextAndPrevEvolution;
  }

  //*Prev Evolutions and item evolution */

  if(actual["prev-evolution"] && actual["prev-evolution"][0]["prev-evolution"]){
    let prevAndPrevEvolution = `<div class="children-one">
    <h2>Prev Evolution:</h2>
    <p>${actual["prev-evolution"][0].num}</p>
    <p>${actual["prev-evolution"][0].name}</p>
    </div>
    <div class="children-two">
    <h2>Prev Evolution:</h2>
    <p>${actual["prev-evolution"][0]["prev-evolution"][0].num}</p>
    <p>${actual["prev-evolution"][0]["prev-evolution"][0].name}</p>
    </div>`

    //console.log(actual["prev-evolution"]);
    //console.log(actual["prev-evolution"][0]["prev-evolution"]);

    return prevAndPrevEvolution;
  } 

  if(actual["prev-evolution"] && actual["prev-evolution"][0]["evolution-item"]){
    let prevAndItemEvolution = `<div class="children-one">
    <h2>Prev Evolution:</h2>
    <p>${actual["prev-evolution"][0].num}</p>
    <p>${actual["prev-evolution"][0].name}</p>
    </div>`

    //console.log(actual["prev-evolution"]);
    //console.log(actual["prev-evolution"][0]["evolution-item"]);

    return prevAndItemEvolution;
  } 

  if(actual["prev-evolution"]){
    let preEvolution = `<div class="children-one">
    <h2>Prev Evolution:</h2>
    <p>${actual["prev-evolution"][0].num}</p>
    <p>${actual["prev-evolution"][0].name}</p>
    </div>`

    //console.log(actual["prev-evolution"]);
    //console.log(actual["prev-evolution"][0]["evolution-item"]);

    return preEvolution;
  } 

  //*Next Evolutions and item evolution */
  if(actual["next-evolution"] && actual["next-evolution"][0]["next-evolution"]){
    let nextAndNextEvolution = `<div class="children-one">
    <h2>Next Evolution:</h2>
    <p>${actual["next-evolution"][0].num}</p>
    <p>${actual["next-evolution"][0].name}</p>
    </div>
    <div class="children-two">
    <h2>Next Evolution:</h2>
    <p>${actual["next-evolution"][0]["next-evolution"][0].num}</p>
    <p>${actual["next-evolution"][0]["next-evolution"][0].name}</p>
    </div>`
    //console.log(actual["next-evolution"]);
    //console.log(actual["next-evolution"][0]["next-evolution"]);
    return nextAndNextEvolution;
  } 

  if(actual["next-evolution"] && actual["next-evolution"][0]["evolution-item"]){
    let nextAndItemEvolution = `<div class="children-one">
    <h2>Next Evolution:</h2>
    <p>${actual["next-evolution"][0].num}</p>
    <p>${actual["next-evolution"][0].name}</p>
    </div>`
    //console.log(actual["next-evolution"]);
    //console.log(actual["next-evolution"][0]["evolution-item"]);
    return nextAndItemEvolution;
  } 

  if(actual["next-evolution"]){
    let nextEvolution = `<div class="children-one">
    <h2>Next Evolution:</h2>
    <p>${actual["next-evolution"][0].num}</p>
    <p>${actual["next-evolution"][0].name}</p>
    </div>`
    //console.log(actual["next-evolution"]);
    //console.log(actual["next-evolution"][0]["evolution-item"]);
    return nextEvolution;
  }
};