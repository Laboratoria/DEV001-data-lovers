import { filterData } from './data.js';

import data from './data/ghibli/ghibli.js';

const gFilms=data.films;

//console.log(data["films"][0]["producer"]);


    //console.log(data["films"][k]["producer"]);
    const productor = document.querySelector(".productores"); //aquí accedo al div con el class = "productores"
    const mostrarProductor = document.createDocumentFragment();

    for (let i=0; i<filterData(gFilms,"producer").length;i++) {
        const item = document.createElement("DIV"); //Esto crea un elemento de HTML (es en mayúscula porque es sensible)
        item.innerHTML = filterData(gFilms,"producer")[i]; //esto lo va guardando en un div
        mostrarProductor.appendChild(item); //esto crea el div
    }
    
    productor.appendChild(mostrarProductor); //y aquí se muestra
