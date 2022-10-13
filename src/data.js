import ghibli from "./data/ghibli/ghibli.js";
const objetos = ghibli


const dataGhibli ={
     datosTodasPeliculas :function(){
      const films = objetos.films
      let arrayFilms = [...films]
       
      
      return arrayFilms
     },
     
     mostrarPeliculaIndividual : function(id){
        const arrayFilms = dataGhibli.datosTodasPeliculas()
        const idCard = id;
        const filmsId = arrayFilms.filter(arrayFilms => arrayFilms.id == idCard);

        return filmsId
     },

    mostrarDataEnPantalla : function(data){
      const datosPeliculas = data;
       

      return datosPeliculas;
    },

    filtrarDirectores : function(directores){
      const arrayFilms = dataGhibli.datosTodasPeliculas();
      const filDirectores = directores;
      const filtroDirectores =  arrayFilms.filter(arrayFilms => arrayFilms.director == filDirectores);
      return filtroDirectores;
    }
    



}


export default dataGhibli