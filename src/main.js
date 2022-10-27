import data from './data/harrypotter/harry.js';

// eslint-disable-next-line no-unused-vars


const dataLibros=data.books;
const dataPersonajes=data.characters;
const dataPociones=data.potions;
const dataHechizos=data.spells;

/*const datas=[];
for(let i=0; i<8; i++){
    datas.push(dataLibros[i].title)
}
const tt=datas.sort();
function verMas(){
    console.log("verMas")
}*/


const caja= document.getElementById("libros");
const contenedorCeldas=document.createElement("div");
contenedorCeldas.className="contenedorCeldas";


dataLibros.forEach(l =>{
    // eslint-disable-next-line no-unused-vars
    
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
    button.value="Ver más";
    button.className="buttonVerMas";
    button.label="Ver más";
    celdas.appendChild(button);

    
    

    for (let i=0;i<8; i++){
      let llamarbutton=celdas.lastElementChild;
      llamarbutton.id=[i];
      console.log(llamarbutton);
      
    }

    const modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
    button.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    
    contenedorCeldas.appendChild(celdas);  
}) 

caja.appendChild(contenedorCeldas);



/*const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/



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


    celdas1.appendChild(p2Celdas1);

    const p3Celdas1=document.createElement("p");
    p3Celdas1.className="p3Celdas1";
    p3Celdas1.innerHTML="<b>Descripción:</b> "+ l.description;

    celdas1.appendChild(p3Celdas1);



    contenedorCeldas1.appendChild(celdas1);
})
caja1.appendChild(contenedorCeldas1);


for (let i=0;i<8; i++){
  let llamardiv=contenedorCeldas1.children[i];
  llamardiv.id=(i);
  
}


const caja4= document.getElementById("Personajes");
const contenedorCeldas4=document.createElement("div");

contenedorCeldas4.className="contenedorCeldas4";

dataPersonajes.forEach(l =>{
    // eslint-disable-next-line no-unused-vars
    
    
    const celdas4=document.createElement("div");
    celdas4.className="celdas4";

    const nameCeldas4=document.createElement("h1");
    nameCeldas4.className="nameCeldas4";
    nameCeldas4.innerHTML=l.name;
    celdas4.appendChild(nameCeldas4);

    
    const houseCeldas4=document.createElement("p");
    houseCeldas4.className="houseCeldas4";
    houseCeldas4.innerHTML= "<b>Casa: </b>" + l.house;
    celdas4.appendChild(houseCeldas4);

  
    
   /* const buttonData=document.getElementById("buttonData")
    const button=document.createElement("input");
    button.type="button";
    button.value="Ver más";
    button.className="buttonVerMas";
    button.label="Ver más";
    buttonData.appendChild(button);
    celdas.appendChild(buttonData);*/

    contenedorCeldas4.appendChild(celdas4);  
}) 
caja4.appendChild(contenedorCeldas4);







const caja2= document.getElementById("pociones");
const contenedorCeldas2=document.createElement("div");

contenedorCeldas2.className="contenedorCeldas2";

dataPociones.forEach(l =>{
    // eslint-disable-next-line no-unused-vars
    
    
    const celdas2=document.createElement("div");
    celdas2.className="celdas2";

    const idCeldas2=document.createElement("h1");
    idCeldas2.className="idCeldas2";
    idCeldas2.innerHTML=l.id;
    celdas2.appendChild(idCeldas2);

    
    const nameCeldas2=document.createElement("h1");
    nameCeldas2.className="nameCeldas2";
    nameCeldas2.innerHTML= l.name;
    celdas2.appendChild(nameCeldas2);

    
    const desCeldas2=document.createElement("p");
    desCeldas2.className="desCeldas2";
    desCeldas2.innerHTML= "<b>Descripción: </b>" + l.description;
    celdas2.appendChild(desCeldas2);
    
   /* const buttonData=document.getElementById("buttonData")
    const button=document.createElement("input");
    button.type="button";
    button.value="Ver más";
    button.className="buttonVerMas";
    button.label="Ver más";
    buttonData.appendChild(button);
    celdas.appendChild(buttonData);*/

    contenedorCeldas2.appendChild(celdas2);  
}) 
caja2.appendChild(contenedorCeldas2);




const caja3= document.getElementById("hechizos");
const contenedorCeldas3=document.createElement("div");

contenedorCeldas3.className="contenedorCeldas3";

dataHechizos.forEach(l =>{  
    const celdas3=document.createElement("div");
    celdas3.className="celdas3";

    const h1Celdas3=document.createElement("h1");
    h1Celdas3.className="h1Celdas3";
    h1Celdas3.innerHTML="<b>Nombre: </b>"+ l.name;
    celdas3.appendChild(h1Celdas3);

    const pCeldas3=document.createElement("p");
    pCeldas3.className="pCeldas3";
    pCeldas3.innerHTML= "<b>Pronunciación: </b>"+ l.pronunciation;
    celdas3.appendChild( pCeldas3);
    
   

    contenedorCeldas3.appendChild(celdas3);  
}) 

caja3.appendChild(contenedorCeldas3);





























































// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it


