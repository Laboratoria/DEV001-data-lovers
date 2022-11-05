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
  
  export const ordenarImportancia=(dataHarry)=>{
    const copiaData=[...dataHarry];
    const sortImportancia=copiaData.sort((a,b)=>{
      if((a.books_featured_in.length) < (b.books_featured_in.length)){
        return -1;
      }
    });
    return sortImportancia;
  }

  export const filtrarCasa=(dataHarry,value)=>{
    const copiaData=[...dataHarry];
    const filterCasa= copiaData.filter(casa => casa.house==value)
    return filterCasa;
  }

  export const filtrarGenero=(dataHarry,value)=>{
    const copiaData=[...dataHarry];
    const filterGenero= copiaData.filter(genero => genero.gender==value)
    return filterGenero;
  }
  export const filtrarEspecie=(dataHarry,value)=>{
    const copiaData=[...dataHarry];
    const filterEspecie= copiaData.filter(especie => especie.species==value)
    return filterEspecie;
  }
  