
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
//import filterByType from './data.js';
//import buscarPorNombre from './data.js';


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
    <div class="modal-footer">
      <h3>Modal Footer</h3>
    </div>
    `;

    elementPokemon.innerHTML += pokemonHTML
    cardInfo.appendChild(elementPokemon)
    //console.log(pokemonParaHTML)
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