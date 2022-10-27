// import {data} from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
//import pokemon from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

//AQUÍ YA LOGRÉ QUE SALGA EL ÚLTIMO POKEMON, IMAGEN, NOMBRE Y NUM usando: import data from './data/pokemon/pokemon.js';
const cardInfo = document.getElementById("container");
const elementPokemon = document.createElement("div");
const infoPokemon = data.pokemon;

infoPokemon.forEach((card) => {
  const pokemonHTML = `
  <div class="cont.cards" id="container">
     <div class="card" id="card">
      <img class="img" src=${card.img} </img>
   </div>
      <div> 
        <p><class= "namepokemon">${card.name}</p>
        <p><class= "numpokemon">${card.num}</p>
      </div>
  </div>
  `;
  elementPokemon.innerHTML += pokemonHTML
  cardInfo.appendChild(elementPokemon)
  //console.log(pokemonParaHTML)
}
);
