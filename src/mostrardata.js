const contenedor=document.getElementById("libros");

export let llamarData = (data2) =>{
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
export const llamarModal=(modal)=>{


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
  





