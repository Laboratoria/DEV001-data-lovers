/* data => trae el objeto pokemon con 251 de ellos*/
import pokemon from './data/pokemon/pokemon.js';

/* Aquí irá nuestros IMPORTS a archivos JS */
import carouselTypes from './js/CarouselTypes.js';
import searchInput from './js/searchInput.js';
import showPokemons from './showCards.js';
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
const arrayNamePokemons = document.querySelectorAll(".introCard");

searchInput.searchPokemonByName(searchInputName, arrayContainerCards, arrayNamePokemons);

