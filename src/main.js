import objetoghibli from './data/ghibli/ghibli.js'; /*libera nuestra data*/
//console.log(objetoghibli.films[0]);
//console.log(objetoghibli.films.length);

// eslint-disable-next-line no-console
console.log(objetoghibli);

//Funcion para mostrar las peliculas
let show = function (dataGhibli){ 
  let newHtml= ""
    dataGhibli.forEach(function(film){
        console.log (film);
        let templatePelicula =`
        <div class="cardPrincipal">
          <img src="${film.poster}" alt="poster">
          ${film.title}
          
        </div>`;
       newHtml+= templatePelicula;
    });
    document.getElementById("root").innerHTML = newHtml;
}

show(objetoghibli.films);
