import data from './data/harrypotter/harry.js';

import { llamarDataLibros , llamarModalLibros, llamarDataPersonajes, llamarModalPersonajes} from './mostrardata.js';
import { encontrarId, ordenarAaZ, ordenarFecha, filtrarCasa, ordenarImportancia, filtrarGenero, filtrarEspecie, estadisticaCasas } from './data.js';

let copiaDataLibros= [...data.books];
llamarDataLibros(copiaDataLibros);
mostrarModal();

let copiaDataPersonajes=[...data.characters];
llamarDataPersonajes(copiaDataPersonajes);
mostrarModalPersonajes();

function mostrarModal(){
  const celdas=document.querySelectorAll(".celdas");
  const span = document.getElementsByClassName("close")[0];
  celdas.forEach(celda  =>{
    celda.addEventListener("click", () =>{
      document.querySelector("#myModal").style.display="flex";
      const idtarjeta= celda.className.split(" ")[0];
      //console.log(idtarjeta)
      llamarModalLibros(encontrarId(idtarjeta, data.books));
    }
    );
    let contenedor2=document.getElementById("libros1");
    span.onclick = function() {
      document.querySelector("#myModal").style.display = "none";
      contenedor2.innerHTML=" ";
    }
    window.onclick = function(event) {
      if (event.target == document.querySelector("#myModal")) {
        document.querySelector("#myModal").style.display = "none";
        contenedor2.innerHTML=" ";
        
      }
    }
  })
}
let contenedor1= document.getElementById("libros");

const selector=document.getElementById("select");
selector.addEventListener("change", () => {
  contenedor1.innerHTML=" ";
  switch (selector.value) {
    case "all":
      llamarDataLibros(data.books);
      break;
    case "ordenarAZ":
      llamarDataLibros(ordenarAaZ(data.books));
      break;
    case "ordenarZA":
      llamarDataLibros(ordenarAaZ(data.books).reverse());
      break;
    case "recienteAntiguo":
      llamarDataLibros(ordenarFecha(data.books));
      break;
    case "antiguoReciente":
      llamarDataLibros(ordenarFecha(data.books).reverse());
      break;
  }
  mostrarModal();
});


function mostrarModalPersonajes(){
  const celdas2=document.querySelectorAll(".celdas2");
  const span2 = document.getElementsByClassName("close1")[0];
  celdas2.forEach(celda  =>{
    celda.addEventListener("click", () =>{
      document.querySelector("#myModal1").style.display="flex";
      const idtarjeta2= celda.className.split(" ")[0];
      llamarModalPersonajes(encontrarId(idtarjeta2, data.characters));
    }
    );
    let contenedor4=document.getElementById("personajes1");
    span2.onclick = function() {
      document.querySelector("#myModal1").style.display = "none";
      contenedor4.innerHTML=" ";
    }
    window.onclick = function(event) {
      if (event.target == document.querySelector("#myModal1")) {
        document.querySelector("#myModal1").style.display = "none";
        contenedor4.innerHTML=" ";
      }
    }
  })
}

const contenedor3=document.getElementById("personajes");
const selector1=document.getElementById("select1");
selector1.addEventListener("change", () => {
  contenedor3.innerHTML=" ";
  switch (selector1.value) {
    case "all":
      llamarDataPersonajes(data.characters);
      break;
    case "menorImportancia":
      llamarDataPersonajes(ordenarImportancia(data.characters));
      break;
    case "mayorImportancia":
      llamarDataPersonajes(ordenarImportancia(data.characters).reverse());
      break;
    
  }

  mostrarModalPersonajes();
});

const selector2=document.getElementById("select2");
selector2.addEventListener("change", () => {
  contenedor3.innerHTML=" ";
  switch (selector2.value) {
    case "all":
      llamarDataPersonajes(data.characters);
      break;
    case "Gryffindor":
      llamarDataPersonajes(filtrarCasa(data.characters, "Gryffindor"));
      break;
      case "Slytherin":
        llamarDataPersonajes(filtrarCasa(data.characters, "Slytherin"));
      break;
    case "Ravenclaw":
      llamarDataPersonajes(filtrarCasa(data.characters, "Ravenclaw"));
      break;
    case "Hufflepuff":
      llamarDataPersonajes(filtrarCasa(data.characters, "Hufflepuff"));
      break;
    case "null":
      llamarDataPersonajes(filtrarCasa(data.characters, null));
      break;
  }

  mostrarModalPersonajes();
});


const selector3=document.getElementById("select3");
selector3.addEventListener("change", () => {
  contenedor3.innerHTML=" ";
  switch (selector3.value) {
    case "all":
      llamarDataPersonajes(data.characters);
      break;
    case "Hombres":
      llamarDataPersonajes(filtrarGenero(data.characters, "Male"));
      break;
      case "Mujeres":
        llamarDataPersonajes(filtrarGenero(data.characters, "Female"));
      break;
  }

  mostrarModalPersonajes();
});

const selector4=document.getElementById("select4");


selector4.addEventListener("change", () => {
  contenedor3.innerHTML=" ";
  
  let humanos=["Human", "humans", "Human (Globin ancenstry)", "Human (Seer)", "Human (Metamorphmagus)",
"Human (Werewolf traits)", "werewolf (formerly Human)", "Veela or part-Veela", "Veela", "1/4 Veela",
"Human (Veela ancestry)", "Half-Human", "Portrait; formerly Human", "Human (Maledictus affliction; formerly)",
"Portrait" ]

  let animales=["Phoenix", "Great grey owl", "Boarhound", "Centaur", "Three-headed dog", "Gorilla", 
  "Werewolf (formerly Human)", "Screech owl", "Mice", "Part-Kneazle cat", "Part-Kneazle", "Scops owl", 
  "Dog (breed: bulldog)", "Owl", "Thestral", "Toad", "Werewolf", "Snowy Owl", "Acromantula",
  "Selkie (Merpeople)", "Norwegian Ridgeback", "Cat", "Mermaid", "Human (Maledictus affliction; formerly)",
  "Basilisk", "Hippogriff", "Peacock", "Rabbit", "Pygmy Puff", "Half-Kneazle"];
  let fantasmas=["Human (formerly)", "Poltergeist", "Ghost"];
  let elfos=["House-elf", "House-elves"];
  let gigantes=["Giant","Human or Giant", "Half-Human/Half-Giant", "Human or Giantess"];
  

  switch (selector4.value) {
    case "all":
      llamarDataPersonajes(data.characters);
      break;
    case "Humanos":
      for(let i=0; i<humanos.length;i++){
      llamarDataPersonajes(filtrarEspecie(data.characters,humanos[i]));
    }
      break;
    case "Animales":
      for(let i=0; i<animales.length;i++){
        llamarDataPersonajes(filtrarEspecie(data.characters, animales[i]));
      }
      llamarDataPersonajes(filtrarEspecie(data.characters, "Male"));
      break;
    case "Vampiros":
      llamarDataPersonajes(filtrarEspecie(data.characters, "Vampire"));
      break;
    case "Fantasmas":
      for(let i=0; i<fantasmas.length;i++){
      llamarDataPersonajes(filtrarEspecie(data.characters, fantasmas[i]));
      }
      break;
    case "Duendes":
      llamarDataPersonajes(filtrarEspecie(data.characters, "Goblin"));
      break;
    case "Elfos":
      for(let i=0; i<elfos.length;i++){
      llamarDataPersonajes(filtrarEspecie(data.characters, elfos[i]));
    }
      break;
    case "Gigantes":
      for(let i=0; i<gigantes.length;i++){
        llamarDataPersonajes(filtrarEspecie(data.characters, gigantes[i]));
      }
      break;
    case "Trolls":
      llamarDataPersonajes(filtrarEspecie(data.characters, "Part-troll human (possibly)"));
      break;

  }
  mostrarModalPersonajes();
});

const $grafica=document.getElementById("grafica");


const etiquetas=["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]

const datosCasas= estadisticaCasas(copiaDataPersonajes);

const datosEstadisticaCasas={
  data: datosCasas,
  backgroundColor:[
    "rgba(77, 12, 30,1)",
    "rgba(24, 56, 37, 1)",
    "rgba(29, 71, 111, 1)",
    "rgba(230, 148, 10, 1)"
  ],
  
  borderWidth:0,
  
};


new Chart ($grafica,{
  type:"pie",
  data:{
    labels: etiquetas,
    datasets:[datosEstadisticaCasas]
  }
});

function mostrarModalEstadistica(){
  const botonEstadistica=document.getElementById("estadistica");
  const span3 = document.getElementsByClassName("close2")[0];
  
    botonEstadistica.addEventListener("click", () =>{
      document.querySelector("#myModal2").style.display="flex";
      
    }
    
    );
    
    span3.onclick = function() {
      document.querySelector("#myModal2").style.display = "none";
      
    }
    window.onclick = function(event) {
      if (event.target == document.querySelector("#myModal2")) {
        document.querySelector("#myModal2").style.display = "none";
        
      }
    }
    mostrarModalEstadistica();
  }

  mostrarModalEstadistica();




