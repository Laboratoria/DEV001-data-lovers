/* data => trae el objeto pokemon con 251 de ellos*/
import pokemon from './data/pokemon/pokemon.js';

/* Aquí irá nuestros IMPORTS a archivos JS */
import carouselTypes from './js/CarouselTypes.js';
import searchInput from './js/searchInput.js';
import showPokemons from './showCards.js';
import filteredPokemons from './js/filters.js';
//import { example, anotherExample } from "./js/data.js";


/* Importamos el contenedor donde añadiremos los tipos de pokemons */
const containerForTypes = document.getElementById("containerTypes");

carouselTypes.addTypesPokemon(containerForTypes);


/* Importamos los iconos del carusel */
const iconRigth = document.getElementById("img-carousel-rigth");
const iconLeft = document.getElementById("img-carousel-left");

const containerTypePokemon = document.querySelectorAll(".CardTypePokemon");

carouselTypes.functionalityCarousel(iconRigth, iconLeft, containerTypePokemon);


/* Importamos elementos que utilizaremos para la funcionalidad de busqueda
de pokemons para ello necesitaremos el contenedor de las cartas (showCards.js)*/

showPokemons();

const searchInputName = document.getElementById("input-search-name");

const arrayContainerCards = document.querySelectorAll(".cuadroPokemon");
//console.log(arrayContainerCards)
const arrayNamePokemons = document.querySelectorAll(".introCard");

searchInput.searchPokemonByName(searchInputName, arrayContainerCards, arrayNamePokemons);


//Importamos elementos para el filtrado

const cardsTypes = document.querySelectorAll(".CardTypePokemon"); //nombre de los botones del carrusel
cardsTypes.forEach(card => {
    card.addEventListener("click", ( )=> {
        const name = card.className.split(" ")[0]
        filteredPokemons(name)
    } )

});
//console.log(searchByType)
