import data from './data/harrypotter/harry.js';


const dataLibros=data.books;
const caja= document.getElementById("libros");
const contenedorCeldas=document.createElement("div");

contenedorCeldas.className="contenedorCeldas";

dataLibros.forEach(l =>{
    
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

    const button=document.createElement("input");
    button.type="button";
    button.value="Submit";
    button.className="buttonVerMas";
    button.label="Ver más";

    celdas.appendChild(button);

    contenedorCeldas.appendChild(celdas);
})
caja.appendChild(contenedorCeldas);



const caja1= document.getElementById("libros1");
const contenedorCeldas1=document.createElement("div");

contenedorCeldas1.className="contenedorCeldas1";

dataLibros.forEach(l =>{
    
    const celdas1=document.createElement("div");
    celdas1.className="celdas1";

    let img1 = document.createElement('img');
    img1.src = l.portada;
    img1.height= 400;
    img1.style.display="block";
    img1.style.margin="auto";
    img1.style.borderRadius="10px";
    celdas1.appendChild(img1);

    const h1Celdas1=document.createElement("h1");
    h1Celdas1.className="h1Celdas1";
    h1Celdas1.innerHTML=l.title;

    celdas1.appendChild(h1Celdas1);

    const p1Celdas1=document.createElement("p");
    p1Celdas1.className="p1Celdas1";
    p1Celdas1.innerHTML= "Autora: "+ l.author;

    celdas1.appendChild(p1Celdas1);

    const p2Celdas1=document.createElement("p");
    p2Celdas1.className="p2Celdas1";
    p2Celdas1.innerHTML="Fecha: "+l.releaseDay;
;

    celdas1.appendChild(p2Celdas1);

    const p3Celdas1=document.createElement("p");
    p3Celdas1.className="p3Celdas1";
    p3Celdas1.innerHTML="Descripción: "+ l.description;

    celdas1.appendChild(p3Celdas1);



    contenedorCeldas1.appendChild(celdas1);
})
caja1.appendChild(contenedorCeldas1);

