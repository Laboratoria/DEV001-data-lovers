import ghibli from "./data/ghibli/ghibli.js";

const objetos = ghibli

import { mostrarPeliculaIndividual, filtrarDirectores,ordenarYears,ordenarScore, estadisticaData} from './data.js';
//Variables globales
const pelicula = document.getElementById("peliculas");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("close");
const home = document.getElementById("home");
const pagina = document.getElementById("muestra");
const personajes = document.getElementById("personajes");
const fecha = document.getElementById("fecha");
const popular = document.getElementById("popular");
const header = document.getElementById("header_inicio")

window.onload = () => {
  mostrarEnPantalla(datosTodasPeliculas());
 // mostrarIndividual()
  
};

function datosTodasPeliculas() {
  const films = objetos.films
  let arrayFilms = [...films]


  return arrayFilms
}


//mostrarIndividual()

//seccion directores
const directores = document.querySelectorAll(".menu_director");

directores.forEach((director =>{
   const directorI = director;
  
   directorI.addEventListener("click", () =>{
      pelicula.innerHTML = "";
      const idDirector = directorI.id;
      const dataDirec =filtrarDirectores(idDirector, datosTodasPeliculas());
   
     mostrarEnPantalla(dataDirec);
    
   });
   
}));




home.addEventListener("click", () =>{
  pelicula.innerHTML = ""
  mostrarEnPantalla(datosTodasPeliculas());
});


function mostrarEnPantalla(data) {
  const array = data;
   for (let i = 0; i < array.length; i++) {
    
      pelicula.innerHTML += `
                     <div class = "card_pelicula">
                        <img src="${array[i].poster}" alt="${array[i].title}">
                       
                        <div class = "textos_card">
                           <h2>${array[i].title}</h2>
                           <p>director: ${array[i].director}</p>
                           <p>year: ${array[i].release_date}</p>
                        </div>
                     <div class = "boton_card" 
                       <span><p><i class="bx bxs-star"></i>${array[i].rt_score}</p></span>
                       <button class="select" id = "${array[i].id}" >view more...</button>
                     </div>
                    </div> 
                   
                  `
               }
              
}


//este es el modal con los detalles de las peliculas al dar click

let abrir;

pelicula.addEventListener('mouseup', (e) => {
  abrir =e.path[0].className
   
   //abrir = e.path[2].classList.value
   //console.log(e.srcElement.className)
  //console.log(e.path[0].className)
   if(abrir === "select"){
    
      modal.style.display = "block";
      header.style.display = "none"
   }
   
   
})


  
 pelicula.addEventListener('mouseup', (e) => {
  //console.log(e.path[0].id)
  let idCard;
  //idCard = e.path[2].id
  idCard = e.path[0].id
  const id = mostrarPeliculaIndividual(idCard, datosTodasPeliculas() );
  
        id.forEach(element => {
        pagina.innerHTML = `
        <div class="modal_pelicula">
           <div class="modal_imagen">
              <img src="${element.poster}" alt="">
           </div>
           <div class="modal_titulo_descripcion">
              <h2>${element.title}</h2>
              <div class = "modal_director"
                <p >producer: ${element.producer}</p>
                <p>director: ${element.director}</p>
              </div>
              <div class="modal_texto_largo"  
                 <p>${element.description}</p>
              </div>  
              <div class="modal_score_date"
                <p>release date: ${element.release_date}</p>
                <p>score: <i class="bx bxs-star"></i>${element.rt_score}</p>
            </div>
        </div>
        `;
          personajes.innerHTML = "";
          element.people.forEach(persona =>{
          personajes.innerHTML +=
           `<div class = "cont_people">
              <img src="${persona.img}" alt="${persona.name}">
              <div class ="con_people_text"
                <p>Name: ${persona.name}</p>
                <p>Specie: ${persona.specie}</p>
              </div> 
           </div>
           ` 
          });
          
         
        });
      });


cerrar.addEventListener("click", function() {
    modal.style.display = "none";
    header.style.display = "block";
});


fecha.addEventListener("click",function(){
  pelicula.innerHTML = ""
  const mostrarYear = ordenarYears(datosTodasPeliculas())
  mostrarEnPantalla(mostrarYear)
});

popular.addEventListener("click",function(){
  pelicula.innerHTML = "";
  const mostrarPopular = ordenarScore(datosTodasPeliculas());
  mostrarEnPantalla(mostrarPopular);
}); 
 







estadisticasData();
function estadisticasData(){
  const estadistica = estadisticaData(datosTodasPeliculas());

// const imgDirect =[

//   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Gor%C5%8D_Miyazaki.jpg/220px-Gor%C5%8D_Miyazaki.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/e/e2/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg",
//    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hiromasa_Yonebayashi.jpg/220px-Hiromasa_Yonebayashi.jpg",
//    "https://lthumb.lisimg.com/709/103709.jpg?width=280&sharpen=true",
//   "https://m.media-amazon.com/images/M/MV5BNDM5OTc2NjI1MV5BMl5BanBnXkFtZTgwOTI3MjA4MTE@._V1_.jpg",
//   "https://www.cartoonbrew.com/wp-content/uploads/2016/02/isaotakahata.jpg",
// ]

//const img = [...imgDirect]
  const estadistic = document.getElementById("contenedor_etadistica");
 // const estadisticImg = document.getElementById("cont_imagenes");
  const nameDirec = document.getElementById("name_direc");
 for(const [key, value] of Object.entries(estadistica)){
   nameDirec.innerHTML += 
   `<div class="directores_name">
     <p>⭐${key}</p>
   </div>`
   
    const porcentaje = (value * 100)/20;
    estadistic.innerHTML +=

   `
      
      <div class="barra" style="--bar-value:${porcentaje}%;" data-name="⭐${key}" title="${key} ${porcentaje}%"></div>
    

  `
  //<div class="barra_name"></div>⭐${key}
 }
//  for (let clave in img){
//   estadisticImg.innerHTML +=
//   `<div class="directores">
//   <img src="${img[clave]}" alt=""></img>
//   </div>
//   `
// }
 
 
}
  







