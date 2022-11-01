/*export const example = () => {
    return 'example';
  };
  
  export const anotherExample = () => {
    return 'OMG';
  };*/
  //import data from './data/harrypotter/harry.js';

  export const encontrarId = (id, dataHarry) => {
    const encontrarDataId = dataHarry.find(
    (tarjeta)=> tarjeta.id == id);
    //console.log(findbyidPokemon);
    //console.log(encontrarDataId);
    return encontrarDataId;
  };

  export const ordenarAaZ= (dataHarry)=>{
    const copiaData=[...dataHarry];
    const sortAaZ= copiaData.sort((a, b) =>{
      if (a.title< b.title){
        return -1;
      }
    });
    return sortAaZ; 
  };

  export const ordenarFecha= (dataHarry)=>{
    const copiaData=[...dataHarry];
    const sortFecha= copiaData.sort((a,b)=>{
      if(a.relaseDay < b.relaseDay){
        return -1;
      }
    });
    return sortFecha;
  };
  

  
  