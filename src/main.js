
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

/* buscar pokemon*/
const search = document.getElementById("Buscar");
const prueba = document.getElementById("prueba")
prueba.addEventListener("click", () => {
    const text = search.value;
    let busca = searchFilter(data.pokemon, text)
    /*  console.log(busca) */
    div.innerHTML = " "
    busca.forEach(nombre => {

        div.innerHTML += drawCard(nombre)
    });
})

export const searchFilter =  (pokemon,nombrePokemon)=> {
  const nameFilter= pokemon.filter (x=>
    x.name.toUpperCase()==nombrePokemon.toUpperCase())

    
  ;return nameFilter


};

export const ordenAzPokemon=(array)=>{

  return array.sort(function (a, b) {
    
    if (a.name < b.name) {
      return -1;
    }
    if (a.name> b.name) {
      return 1;
    }
   return 0;
  })
  
  
}