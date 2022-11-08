// estas funciones son de ejemplo

//Sort A-Z Y Z-A
export const sortPelis = (dataGhibli) =>{
  let copyArray = dataGhibli;
  const pelisOrdenadas = copyArray.sort((prev, next) =>{
    if (prev.title < next.title) {
     return -1;
    }
  });
  return pelisOrdenadas;
}