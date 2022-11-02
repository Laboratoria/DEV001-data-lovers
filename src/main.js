
import data from './data/pokemon/pokemon.js';

//AQUÍ YA LOGRÉ QUE SALGA EL ÚLTIMO POKEMON, IMAGEN, NOMBRE Y NUM usando: import data from './data/pokemon/pokemon.js';
const cardInfo = document.getElementById("cont-card");
const elementPokemon = document.createElement("div");
elementPokemon.classList.add("solucion")
const infoPokemon = data.pokemon;

//TODO: creare funcion que reciba un arreglo de objetos(pokemones) y retorna un arreglo de cards (etiquetas HTML)

  infoPokemon.forEach((card) => {
    const pokemonHTML = `
    <div class="cont.card" id=${card.num}>
    <img class="detalle" id="circulo"></img>
    <div class="card" id="card"><img class="img" src=${card.img} </img>
    <p><class= "namepokemon">${card.name} </p>
    <p><class= "numpokemon">${card.num}</p>
    </div>
    </div>
    `;

    elementPokemon.innerHTML += pokemonHTML
    cardInfo.appendChild(elementPokemon)
    //console.log(pokemonParaHTML)
  }
  );

