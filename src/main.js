import data from './data/harrypotter/harry.js';

import { llamarData,llamarModal } from './mostrardata.js';



// eslint-disable-next-line no-unused-vars


//const dataLibros=data.books;
//const dataPersonajes=data.characters;
//const dataPociones=data.potions;
//const dataHechizos=data.spells;


let copiaDataLibros= [...data.books];
llamarData(copiaDataLibros);

mostrarModal();

function mostrarModal(){
  const celdas=document.querySelectorAll(".celdas");
  const span = document.getElementsByClassName("close");
  celdas.forEach(tarjeta  =>{
    tarjeta.addEventListener("click", () =>{
      document.querySelector("#libros1").style.display="flex";
      llamarModal(copiaDataLibros);

    }
    );
  

    span.addEventListener("click", () => {
      document.querySelector("#libros1").style.display = "none";
    }
    );
   
  })
}



/*
//obtiene el boton ordenar que esta en html
document.getElementById("ordenar").addEventListener("click", ordenarData);
//console.log(ordenar);
//al hacer click en el boton ordenar este cumple la funcion ordenarData
//ordenar.addEventListener("onclick",ordenarData);

//ordenar.addEventListener(onclick, ordenarData)


//funcion para ordenar la data
function ordenarData(){
  //crear constante con array vacio
  const datas=[];
  //bucle que itera sobre dataLibros
  for(let i=0; i<8; i++){
    //titulo que pertenece a dataLibros es agregado al nuevo array
    datas.push(dataLibros[i].title); 
  }
  //returna una alerta con el nuevo array (titulos organizados)
  return document.getElementById("pnuevoslibros").innerHTML= (datas.sort());

}


//console.log(ordenarData);

const caja= document.getElementById("libros");
dataLibros.forEach(l =>{

  

  const abrir= () => modal.style.display="block";

  let dataHarry = `
  <div class= "celdas">
  <img id="img" src=${l.portada}>
  <h1 class= "h1Celdas">${l.title}</h1>
  <button class="button"  value="ver Mas" onclick=${this.abrir()} >ver más</button>
  </div>`

  caja.insertAdjacentHTML("beforeend", dataHarry);
});

    
      const caja1= document.getElementById("libros1");
      const modal = document.getElementById("myModal");
      const span = document.getElementsByClassName("close")[0];
      // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal.style.display = "none";
          }
      
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
        /*
        botonvermas.addEventListener("click", () =>{
            modal.style.display = "flex";
          });
        


dataLibros.forEach(l =>{
  let dataModal = `<div class= "contenedorCeldas1">
  <div class= "celdas1">
  <img class="img1" src=${l.portada}>
  <h1 class= "h1Celdas1">${l.title}</h1>
  <p class="p1celdas1"><b>Autora: </b> ${l.author}</p>
  <p class="p2celdas1"><b>Fecha: </b> ${l.releaseDay}</p>
  <p class="p3celdas1"><b>Descripción: </b> ${l.description}</p>

  </div>
  
  </div>`
  

  caja1.insertAdjacentHTML("beforeend", dataModal);
});

const caja4= document.getElementById("Personajes");


dataPersonajes.forEach(l =>{
  let dataPersonas= `<div class= "contenedorCeldas4">
  <div class= "celdas4">
  <h1 class= "nameCeldas4">${l.name}</h1>
  <p class="descrpcionCeldas4"><b>Casa: </b> ${l.house}</p>
  </div>
  
  </div>`
  

  caja4.insertAdjacentHTML("beforeend", dataPersonas);
});





/*

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

  /* 
  for (let i=0;i<8; i++){

    let llamardiv=celdas.childNodes[i];
    let llamarid=llamardiv.ELEMENT_NODE[2];
    //let llamarid2=llamarid.childNodes[2];
   
    
    
    console.log(llamarid);
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


for (let i=0;i<8; i++){
  let llamardiv=contenedorCeldas.children[i];
  llamardiv.id=(i);
  //console.log(llamardiv)
}

for (let i=0;i<8; i++){
  let llamardiv2=contenedorCeldas.children[i];
  let llamar= llamardiv2.lastChild;
  llamar.id= "boton" + i;
  //console.log(llamar)
  
}

*/


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


/*

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
  //console.log(llamardiv)
}
*/

/*
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
    celdas.appendChild(buttonData);

    contenedorCeldas4.appendChild(celdas4);  
}) 
caja4.appendChild(contenedorCeldas4);


*/
/*dataPociones.forEach(l=>{
const caja2=document.getElementById("pociones");

const plantillaPociones=   
`<div class="contenedorPociones">
<div class="pociones01">
 <h1 class="idPociones">${l.id}</h1><br>
  <h1 class="namePociones"> ${ l.name }</h1>
  <p class="desPociones><b>Descripción: </b>${ l.description}<br> 
 </div>
 </div>`;
 
 caja2.insertAdjacentHTML("beforeend", plantillaPociones);})*/


/*
dataHechizos.forEach(l=>{
const plantillaHechizos=   
`<div class="contenedorHechizos">
<div class="hechizos">
 <h1 class="h1hechizos"><b>Nombre: </b>${l.name}</h1><br>
  <p class="phechizos"><b>Pronunciación: </b> ${ l.pronunciation }</p>
  <p><b>Descripción: </b>${ l.description}<br> 
 </div>`;
document.body.innerHTML = plantillaHechizos;})

*/
/*const caja2= document.getElementById("pociones");
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

    //contenedorCeldas2.appendChild(celdas2);  
//}) 
//caja2.appendChild(contenedorCeldas2);*/




/*const caja3= document.getElementById("hechizos");
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

caja3.appendChild(contenedorCeldas3);*/





























































// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it




