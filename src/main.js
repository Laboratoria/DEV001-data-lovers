
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
//import filterByType from './data.js';
//import buscarPorNombre from './data.js';


//AQUÍ YA LOGRÉ QUE SALGA EL ÚLTIMO POKEMON, IMAGEN, NOMBRE Y NUM usando: import data from './data/pokemon/pokemon.js';
const cardInfo = document.getElementById("cont-card");
const elementPokemon = document.createElement("div");
elementPokemon.classList.add("solucion");
const infoPokemon = data.pokemon;

 infoPokemon.forEach((card) => {
 const pokemonHTML = `
<div class="cont.card" id=${card.num}>
    <div class="card" id="card"><img class="img" src=${card.img} </img>
    <p><class= "namepokemon">${card.name} </p>
    <p><class= "numpokemon">${card.num}</p><br>
    <button id="myBtn">Open Modal</button>
    </div>
    </div>
    
    </div>
    `;

    elementPokemon.innerHTML += pokemonHTML
    cardInfo.appendChild(elementPokemon)
    //console.log(pokemonParaHTML)
}
);
/* buscar pokemon
const search = document.getElementById("Buscar");
const prueba = document.getElementById("prueba")

prueba.addEventListener("click", () => {
    const text = search.value;
    let busca = searchFilter(data.pokemon, text)
    //console.log(busca)
    div.innerHTML = " "

    busca.forEach(nombre => {

        div.innerHTML += drawCard(nombre)
    });
})*/

