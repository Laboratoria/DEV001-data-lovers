export const filterData = (data, condition) => {
  const result = [];

  data.filter((data) => {

    if (!result.includes(data[condition])) { result.push(data[condition]); }

    return result;

  });
  return result;
};

/**
 * Ordena las peliculas por titulo en orden ascendente(a-z) por defecto
 * @param {array} movies
 * @param {string} order(default asc)
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects}
 * @returns {array}
 */
export function orderByTitle(movies) {
  return [...movies].sort((movieLeft, movieRight) => {
      // el titulo de la izquierda va primero
      if (movieLeft.title < movieRight.title) {
        return -1;
      }
      // el titulo de la derecha va primero
      if (movieLeft.title > movieRight.title) {
        return 1;
      }
      // los titulos son iguales
      return 0;
  });
}