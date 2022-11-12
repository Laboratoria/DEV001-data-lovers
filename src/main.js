
import data from './data/pokemon/pokemon.js';
import { searchFilter, ordenAZPokemon, ordenZAPokemon } from './data.js';

// ---- Mostrar cartas de cada Poke ----
const infoPokemon = data.pokemon;
const cardInfo = document.getElementById("cont-card");

infoPokemon.forEach((persona) => {
    cardInfo.innerHTML += cardTemplate(persona.img, persona.num, persona.name)
});

function cardTemplate(img, num, name) {
    const pokemonHTML = `
  <div class="cont.card" id=${num}>
  <div class="card" id="card">
  <img class="img" src=${img} </img><div> 
  <p><class= "namepokemon">${name} </p>
  <p><class= "numpokemon">${num}</p><br>
  <button class="botonVerMas" id="myBtn">Ver más</button>
  </div>
  </div>
  </div>
  `;
    return pokemonHTML
}

// ---- Buscar por nombre
const search = document.getElementById("search");
const prueba = document.getElementById("botonBuscar")
prueba.addEventListener("click", () => {
    const text = search.value;
    let busca = searchFilter(infoPokemon, text)
    /*  console.log(busca) */
    cardInfo.innerHTML = " "
    busca.forEach((nombre) => {

        cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name)
    });
})

/*// ---- Botón SCROLL ----
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
}*/

//Ordenar de A a la Z
const ordenAZ = document.getElementById("A-Z");
//const ordenZa = document.getElementById("Z-A");
ordenAZ.addEventListener("click" , () => {
    const orden1= ordenAZ;
    let ordenada = ordenAZPokemon(infoPokemon,orden1) 
    //console.log(ordenada);
    cardInfo.innerHTML = " "
   ordenada.forEach((nombre) => {
       cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name)
    });
})

//Ordenar de Z a la A
const ordenZA = document.getElementById("Z-A");
ordenZA.addEventListener("click" , () => {
    const orden2= ordenZA;
    let desordenada = ordenZAPokemon(infoPokemon,orden2) 
    //console.log(ordenada);
    cardInfo.innerHTML = " "
   desordenada.forEach((nombre) => {
       cardInfo.innerHTML += cardTemplate(nombre.img, nombre.num, nombre.name)
    });
})