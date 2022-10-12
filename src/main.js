/* data => trae el objeto pokemon con 251 de ellos*/
import pokemon from './data/pokemon/pokemon.js';

/* Aquí irá nuestros IMPORTS a archivos JS */
import carouselTypes from './js/CarouselTypes.js';
import { example, anotherExample } from "./js/data.js";


/* Importamos el contenedor donde añadiremos los tipos de pokemons */
const containerForTypes = document.getElementById("containerTypes");

carouselTypes.addTypesPokemon(containerForTypes);

/* Importamos los iconos del carusel */
const iconRigth = document.getElementById("img-carousel-rigth");
const iconLeft = document.getElementById("img-carousel-left");

const containerTypePokemon = document.querySelectorAll(".CardTypePokemon");

carouselTypes.functionalityCarousel(iconRigth, iconLeft, containerTypePokemon);

