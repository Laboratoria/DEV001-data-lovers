import { orderByTitle } from './data.js';
import data from './data/ghibli/ghibli.js';

/**
 * Muestra los titulos de las peliculas y sus posters. 
 * @param {array} movies - lista de peliculas para mostrar
 */
 function showMovies(movies) {
    const moviesFragment = document.createDocumentFragment();
    movies.forEach(movie => {
        const title = document.createElement("p");
        title.innerText = movie.title;
        const poster = document.createElement("img");
        poster.src = movie.poster;
        const movieCard = document.createElement("div");
        movieCard.appendChild(poster);
        movieCard.appendChild(title);
        moviesFragment.appendChild(movieCard);
    });
    document.querySelector(".movies").appendChild(moviesFragment);
}

const movies = data.films.map(movie => {
    return {title: movie.title, poster: movie.poster};
});

showMovies(orderByTitle(movies));

