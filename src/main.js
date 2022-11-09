
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import {searchFilter} from './data.js';
//import ordenAzPokemon from './data.js';


//AQUÍ YA LOGRÉ QUE SALGA EL ÚLTIMO POKEMON, IMAGEN, NOMBRE Y NUM usando: import data from './data/pokemon/pokemon.js';

const cardInfo = document.getElementById("cont-card");
const elementPokemon = document.createElement("div");
elementPokemon.classList.add("solucion");
const infoPokemon = data.pokemon;
//Función que muestra todas las cartas
//const nuestraCarta= ((infoPokemon)=>{
infoPokemon.forEach((card) => {
  const pokemonHTML = `
  <div class="cont.card" id=${card.num}>
  
  <div class="card" id="card"><img class="img" src=${card.img} </img>
  <p><class= "namepokemon">${card.name} </p>
  <p><class= "numpokemon">${card.num}</p>
  <button id="myBtn">Open Modal</button>

 
 
  </div>
  </div>
  `;

  elementPokemon.innerHTML += pokemonHTML
  cardInfo.appendChild(elementPokemon)
 
}
);
//});



/*const cardGrande=  (infoPokemon) => {  
let modal = document.getElementById("myModal");          
let btn = document.getElementById("myBtn");              
let span = document.getElementsByClassName("close")[0];
const modaldentro = document.createElement('div');
  modaldentro.classList.add('modalinterno');
  modaldentro.innerHTML = `
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>titulo</h2>
    </div>
    <div class="modal-body">
      <p>Some text in the Modal Body</p>
      <p>Some other text...</p>
    </div>
    <div class="modal-footer">
      <h3>Modal Footer</h3>
    </div>
  </div>`  
  document.querySelector('.modal-contet').appendChild(modaldentro); 
                                                          



btn.onclick = function() {                                
  modal.style.display = "block";
}
span.onclick = function() {                             
  modal.style.display = "none";
}
window.onclick = function(event) {                       
  if (event.target == modal) {
    modal.style.display = "none";

    cardGrande.innerHTML = '';
  }
}
}*/


//boton de ir arriba
const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
  window.scrollTo(0, 0)
})

window.onscroll = () => {
add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
if (window.scrollY < 300) {
  btn_scrolltop.classList.remove("btn-scrolltop-on")
} else {
  btn_scrolltop.classList.add("btn-scrolltop-on")


}
}

//buscar pokemon



 //buscar pokemon
const search = document.getElementById("search");
const prueba = document.getElementById("boton")
prueba.addEventListener("click", () => {
    const text = search.value;
    let busca = searchFilter(data.pokemon, text)
     //console.log(busca) 
    div.innerHTML = " "
    busca.forEach(nombre => {

      div.innerHTML += pokemonHTML
      cardInfo.appendChild(elementPokemon)
    });
})


