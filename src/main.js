import data from './data/harrypotter/harry.js';


const libros=data.books;
const caja= document.getElementById("libros");
const contenedorCeldas=document.createElement("div");

contenedorCeldas.className="contenedorCeldas";

libros.forEach(l =>{
    
    const celdas=document.createElement("div");
    celdas.className="celdas";

    let img = document.createElement('img');
    img.src = l.portada;
    img.height= 400;
    img.style.display="block";
    img.style.margin="auto";
    img.style.borderRadius="10px";
    celdas.appendChild(img);

    const h1Celdas=document.createElement("h1");
    h1Celdas.className="h1Celdas";
    h1Celdas.innerHTML=l.title;

    celdas.appendChild(h1Celdas);

    contenedorCeldas.appendChild(celdas);
})
caja.appendChild(contenedorCeldas);




