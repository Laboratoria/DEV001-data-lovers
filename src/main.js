import data from './data/harrypotter/harry.js';


const dataLibros=data.books;
const datas=[];
for(let i=0; i<8; i++){
    datas.push(dataLibros[i].title)
}
const tt=datas.sort();


const caja= document.getElementById("libros");
const contenedorCeldas=document.createElement("div");

contenedorCeldas.className="contenedorCeldas";

dataLibros.forEach(l =>{
    
    const celdas=document.createElement("div");
    celdas.className="celdas";

    let img = document.createElement('img');
    img.src = l.portada;
    img.style.height= "400px";
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
    img1.className="img1";
    img1.src = l.portada;
    celdas1.appendChild(img1);

    const h1Celdas1=document.createElement("h1");
    h1Celdas1.className="h1Celdas1";
    h1Celdas1.innerHTML=l.title;

    celdas1.appendChild(h1Celdas1);

    const p1Celdas1=document.createElement("p");
    p1Celdas1.className="p1Celdas1";
    p1Celdas1.innerHTML= "<b>Autora: </b>"+ l.author;

    celdas1.appendChild(p1Celdas1);

    const p2Celdas1=document.createElement("p");
    p2Celdas1.className="p2Celdas1";
    p2Celdas1.innerHTML="<b>Fecha: </b>" +l.releaseDay;
;

    celdas1.appendChild(p2Celdas1);

    const p3Celdas1=document.createElement("p");
    p3Celdas1.className="p3Celdas1";
    p3Celdas1.innerHTML="<b>Descripción:</b> "+ l.description;

    celdas1.appendChild(p3Celdas1);



    contenedorCeldas1.appendChild(celdas1);
})
caja1.appendChild(contenedorCeldas1);

