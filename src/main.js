import objetoghibli from './data/ghibli/ghibli.js'; /*libera nuestra data*/
//console.log(objetoghibli.films[0]);
//console.log(objetoghibli.films.length);

console.log(objetoghibli);

//Funcion para mostrar las peliculas
let show = function (dataGhibli){ 
  let newHtml=""
    dataGhibli.films.forEach(function(film){
        console.log (film);
        let templatePelicula =`
        <div class="cardPrincipal">
          <img src="${film.poster}" alt="Castle in the Sky">
          ${film.title}
          
        </div>`;
       newHtml+= templatePelicula;
    });
    document.getElementById("root").innerHTML = newHtml;
}

show(objetoghibli);
