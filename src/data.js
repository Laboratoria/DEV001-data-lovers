export const mostrarPeliculaIndividual = (id, data) => {
const filmsId = data.filter(data => data.id === id);
return filmsId
}
export const filtrarDirectores = (directores, data) => {
  const filtroDirectores = data.filter(data => data.director === directores);
  return filtroDirectores;
}
export const ordenarYears = (data) => {
 const clave = data.sort(function (a, b) {
      return b.release_date - a.release_date;
  });
    return clave;
};
export const ordenarScore = (data) => {
  data = data.sort(function (a, b) {
      return parseInt(b.rt_score) - parseInt(a.rt_score)
    });
    return data; 
};
export const estadisticaData = (data) => {
    const directorEstadistica = []
   data.forEach((datos =>{
      directorEstadistica.push(datos.director)
   }));
 const resultado = directorEstadistica.reduce((previousValue, currentValue) => ((previousValue[currentValue] = previousValue[currentValue] + 1 || 1), previousValue), {})
 return resultado;
}


