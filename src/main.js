
import data from './data/pokemon/pokemon.js';

//AQUÍ YA LOGRÉ QUE SALGA EL ÚLTIMO POKEMON, IMAGEN, NOMBRE Y NUM usando: import data from './data/pokemon/pokemon.js';
const cardInfo = document.getElementById("cont-card");
const elementPokemon = document.createElement("div");
elementPokemon.classList.add("solucion")
const infoPokemon = data.pokemon;

infoPokemon.forEach((card) => {
  const pokemonHTML = `
  <div class="cont.card" id=${card.num}>
  <div class="card" id="card"><img class="img" src=${card.img} </img><div> 
  <p><class= "namepokemon">${card.name} </p>
  <p><class= "numpokemon">${card.num}</p>

  </div>
  </div>
  </div>
  `;

  elementPokemon.innerHTML += pokemonHTML
  cardInfo.appendChild(elementPokemon)
  //console.log(pokemonParaHTML)
}
);
