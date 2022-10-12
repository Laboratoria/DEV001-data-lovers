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
        const idCard = id
        const filmsId = arrayFilms.filter(arrayFilms => arrayFilms.id == idCard)

        return filmsId
     },

    ordenarPelicula : function(){


    },

    


}


export default dataGhibli