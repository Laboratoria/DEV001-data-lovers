const contenedor=document.getElementById("libros");

export let llamarDataLibros = (data2) =>{
  data2.forEach(l =>{
      
    let dataHarry = `
    <div class= "${l.id} celdas">
    <img id="img" src=${l.portada}>
    <h1 class= "h1Celdas">${l.title}</h1>

    </div>`
      
  contenedor.insertAdjacentHTML("beforeend", dataHarry);
});

}


const contenedor1=document.getElementById("libros1");
export const llamarModalLibros=(modal)=>{


    let dataModal = `<div class= "contenedorCeldas1">
    <div class= "celdas1">
    <img class="img1" src=${modal.portada}>
    <h1 class= "h1Celdas1">${modal.title}</h1>
    <p class="p1celdas1"><b>Autora: </b> ${modal.author}</p>
    <p class="p2celdas1"><b>Fecha: </b> ${modal.releaseDay}</p>
    <p class="p3celdas1"><b>Descripción: </b> ${modal.description}</p>
  
    </div>
    
    </div>`
    contenedor1.insertAdjacentHTML("beforeend", dataModal)

}

const contenedor2= document.getElementById("personajes");

export const llamarDataPersonajes =(data3)=>{

  data3.forEach(l =>{
    if(l.imagen===undefined){
      l.imagen="https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/sinpersonaje.jpg";
    }
    /*
    if(l.house==="Slytherin"){
      let casas = document.getElementById("houseCeldas2");
      casas.setAttribute("style", "background-color:darkblue;");
    }
    */
    let dataPersonas= `
    <div class= "${l.id} celdas2">
    
    <img id="img2" src=${l.imagen}>
    <h1 class= "nameCeldas2">${l.name}</h1>
    <p class="houseCeldas2" id="houseCeldas2"><b>Casa: </b> ${l.house}</p>
    
    
    </div>`
    

    contenedor2.insertAdjacentHTML("beforeend", dataPersonas);
  });

}


const contenedor3=document.getElementById("personajes1");
export const llamarModalPersonajes=(modal)=>{


    let dataModal = `<div class= "contenedorCeldas3">
    <div class= "celdas3">
    <img class="img3" src=${modal.imagen}>
    <h1 class= "h1Celdas3">${modal.name}</h1>
    <p class="p1celdas3">${modal.birth}" - " ${modal.death}</p>
    <p class="p2celdas3"><b>Casa: </b> ${modal.house}</p>
    <p class="p3celdas3"><b>Especie: </b> ${modal.species}</p>
    <p class="p4celdas3"><b>Linaje: </b> ${modal.ancestry}</p>
    <p class="p5celdas3"><b>Género: </b> ${modal.gender}</p>
    <p class="p6celdas3"><b>Color de cabello: </b> ${modal.hair_color}</p>
    <p class="p7celdas3"><b>Color de ojos: </b> ${modal.eye_color}</p>
    <p class="p8celdas3"><b>Composición varita: </b> ${modal.wand}</p>
    <p class="p9celdas3"><b>Patronus: </b> ${modal.patronus}</p>
    <p class="p10celdas3"><b>Grupos Asociados: </b> ${modal.associated_groups}</p>
    <p class="p11celdas3"><b>Libros en los que se menciona: </b> ${modal.books_featured_in}</p>
    
  
    </div>
    
    </div>`
    contenedor3.insertAdjacentHTML("beforeend", dataModal)

}


