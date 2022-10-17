/* data => trae el objeto pokemon con 251 de ellos*/
import pokemon from './data/pokemon/pokemon.js';

/* Aquí irá nuestros IMPORTS a archivos JS */
import carouselTypes from './js/CarouselTypes.js';
import showPokemons from './showCards.js';
<<<<<<< HEAD
import filteredPokemons from './js/filters.js';
=======
import searchInput from './js/searchInput.js';
import filterPokemonTypes from './js/filters.js';
>>>>>>> 7d080f349e64cbc45844cb2bc1eb4fdafdfc6eb1
//import { example, anotherExample } from "./js/data.js";




/* Importamos el contenedor donde añadiremos los tipos de pokemons */
const containerForTypes = document.getElementById("containerTypes");

carouselTypes.addTypesPokemon(containerForTypes);




/* Importamos los iconos del carusel */
const iconRigth = document.getElementById("img-carousel-rigth");
const iconLeft = document.getElementById("img-carousel-left");

const containerTypePokemon = document.querySelectorAll(".CardTypePokemon");

carouselTypes.functionalityCarousel(iconRigth, iconLeft, containerTypePokemon);


<<<<<<< HEAD
=======




/* Importamos el contenedor de cada tarjeta que muestra el tipo del pokemon
y lo convertimos en un array, esto nos permitira filtrar segun su nombre*/

const pokemonTypeName = document.querySelectorAll(".CardTypePokemon");

//?Recorremos el array de los contenedores que muestran los tipos y del que le den click traeremos su clase:

pokemonTypeName.forEach((cardType)=>{
    cardType.addEventListener("click", ()=>{
        const nameType = cardType.className.split(" ")[0];
        console.log(nameType);
        filterPokemonTypes(nameType);
    });
});





>>>>>>> 7d080f349e64cbc45844cb2bc1eb4fdafdfc6eb1
/* Importamos elementos que utilizaremos para la funcionalidad de busqueda
de pokemons para ello necesitaremos el contenedor de las cartas (showCards.js)*/

showPokemons();

<<<<<<< HEAD
=======
/*
>>>>>>> 7d080f349e64cbc45844cb2bc1eb4fdafdfc6eb1
const searchInputName = document.getElementById("input-search-name");

const arrayContainerCards = document.querySelectorAll(".cuadroPokemon");
//console.log(arrayContainerCards)
const arrayNamePokemons = document.querySelectorAll(".introCard");

searchInput.searchPokemonByName(searchInputName, arrayContainerCards, arrayNamePokemons);
*/

searchInput.searchPokemonByName();



//Importamos elementos para el filtrado

const cardsTypes = document.querySelectorAll(".CardTypePokemon"); //nombre de los botones del carrusel
cardsTypes.forEach(card => {
    card.addEventListener("click", ( )=> {
        const name = card.className.split(" ")[0]
        filteredPokemons(name)
    } )

});
//console.log(searchByType)
