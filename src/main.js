/* data => trae el objeto pokemon con 251 de ellos*/
import data from "./data/pokemon/pokemon.js";

/* Aquí irá nuestros IMPORTS a archivos JS */
import carouselTypes from "./js/CarouselTypes.js";
import { showPokemons } from "./showCards.js";
import { filterByType, filterByGeneration } from "./js/data.js";
import { cleanClass, validateInput } from "./js/functions.js";

/* Llamamos a la función que mostrara la data*/
showPokemons(data.pokemon);

/* Importamos el contenedor donde añadiremos los tipos de pokemons */
const containerForCardTypes = document.getElementById("containerTypes");
carouselTypes.addTypesPokemon(containerForCardTypes);

/* Importamos los iconos del carusel */
const iconRigth = document.getElementById("img-carousel-rigth");
const iconLeft = document.getElementById("img-carousel-left");

/* Importamos el contenedor de cada tarjeta que muestra el tipo del pokemon
y lo convertimos en un array, esto nos permitira filtrar segun su nombre*/
const allCardTypes = document.querySelectorAll(".CardTypePokemon");
carouselTypes.functionalityCarousel(iconRigth, iconLeft, allCardTypes);

//let containerForCards = document.getElementById("pokemonsContainer");
const searchInputName = document.getElementById("input-search-name");
//?Recorremos el array de los contenedores que muestran los tipos y del que le den click traeremos su clase:

allCardTypes.forEach((cardType) => {
  cardType.addEventListener("click", () => {
    const nameType = cardType.className.split(" ")[0];

    //limpiar la clase borderRed asi en cada click la elimina
    cleanClass(allCardTypes);
    //añade la clase borderRed asi en cada click la elimina
    cardType.classList.add("borderRed");

    /*while (containerForCards.childNodes.length > 2) {
      containerForCards.removeChild(containerForCards.firstChild);
    }*/
    
    showPokemons(filterByType(nameType, data));

        //para limpiar el input del buscador.
        searchInputName.value = "";
        document.querySelector("#text-error").style.display = "none";


    });
});

/**/

searchInputName.addEventListener("input", () => {
  const arrayContainerCards = document.querySelectorAll(".cuadroPokemon");
  const arrayNamePokemons = document.querySelectorAll(".introCard");
  let inputValue = searchInputName.value.toLowerCase();
  if (validateInput(inputValue) || inputValue === "") {
    arrayNamePokemons?.forEach((name, index) => {
      if (!name.innerText.toLowerCase().includes(inputValue)) {
        arrayContainerCards[index].classList.add("hideCard");
      } else {
        arrayContainerCards[index].classList.remove("hideCard");
      }
    });
    document.querySelector("#text-error").style.display = "none";
  } else {
    document.querySelector("#text-error").style.display = "flex";
  }
});

/* ESTA ES LA PRUEBA CON LUNA DONDE ME EXPLICABA LO DE LA FUNSIÓN PURA Y FILTER 
const datapoke = data.pokemon;
const filterXGeneration= document.getElementById("generationClass");
filterXGeneration.addEventListener("change", ()=>{
    switch (filterXGeneration.value) {
        case "all":
            showPokemons(data.pokemon)
            break;
        case "kanto":
            showPokemons(filterGeneration("normal", datapoke) )
        break;
        case "johto":
            showPokemons(filterGeneration("special", datapoke))
            break;
    }
} )
*/

// esto es para probar subir bien la info
