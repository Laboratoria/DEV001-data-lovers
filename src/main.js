
import data from './data/pokemon/pokemon.js';
//import filterByType from './data.js';
//import buscarPorNombre from './data.js';


//AQUÍ YA LOGRÉ QUE SALGA EL ÚLTIMO POKEMON, IMAGEN, NOMBRE Y NUM usando: import data from './data/pokemon/pokemon.js'
const cardInfo = document.getElementById("cont-card");
const elementPokemon = document.createElement("div");
elementPokemon.classList.add("solucion")
const infoPokemon = data.pokemon;

infoPokemon.forEach((card) => {
  const pokemonHTML = `
    <div class="cont.card" id=${card.num}>

    <div class="card" id="card"><img class="img" src=${card.img} </img>
    <p><class= "namepokemon">${card.name} </p>
    <p><class= "numpokemon">${card.num}</p>

    <img class="type1" id="type1"></img>
    <div class="type">${card.type}</div>
    
    </div>
    </div>
    `;

  elementPokemon.innerHTML += pokemonHTML
  cardInfo.appendChild(elementPokemon)
}
);




































































//FILTRAR POR TIPO -----

//filtroPorTipo.addEventListener('change', function() {
  //if (filtroPorTipo.value === 'all') {
    //elementPokemon.innerHTML = "";
    //cardInfo(infoPokemon)
  //} else {
   // const catchFilter = filterByType(infoPokemon, filtroPorTipo.value);
    //elementPokemon.innerHTML = '';
    //cardInfo(catchFilter);
  //}
//}
//)