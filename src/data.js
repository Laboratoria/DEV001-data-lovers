export function filtroPokeKanto(pokemones) {
    let pokeKanto = []
    pokemones.forEach(function(pokemon) {
        if (pokemon.generation.name === 'kanto') {
            pokeKanto.push(pokemon);
        }
    })
    return pokeKanto;

}

export const filtroPorTipo = (arraypokemon, tipo) => { //Creamos una función para exportar/el arraypokemon no tiene valor aún es nuestro parámetro

    return arraypokemon.filter(elemento => elemento.type.includes(tipo));
}

//Ordenar de la A a la Z
export const ordenAZ = (arraypokemon, ordenSeleccionado) => {
    if (ordenSeleccionado === "AZ") {
        const ordenByAZ = arraypokemon.sort((a, b) =>
            a.name.localeCompare(b.name)

        )
        return ordenByAZ
    } else if (ordenSeleccionado === "ZA") {
        const ordenByZA = arraypokemon.sort((a, b) =>
            b.name.localeCompare(a.name)
        )
        return ordenByZA
    } else { return arraypokemon }
};



//Creamos una función filter
//Etapas filter: constante = parámetro.filter (recorrido x cada elemento del array desde el principio, con .type entramos al tipo
//(éste es un array dentro de otro array con uno o más argumentos)), éste busca que sea igual a lo señalado despues de las ===
//Convertir el fire en dinámico
//nos retorna el resultado de nuestro filter


//PREGUNTAS:
//¿CÓMO CAMBIAR EL FIRE X LA OPCIÓN ELEGIDA X EL USUARIO?
//¿CÓMO VINCULAR EL MYSELECT A CADA BOTON?
//



//utilizar includes

//realizar test a esta función
//Realizar una función que permita filtrar dependiendo lo que el usuario eligió
//A pokeKanto se le hace el filter

//Se tendría que exportar la const que utilizaremos en el test?

//hacer un filter con un forEach para que aplique a cada elemento de la data
//Hacer que se borre la pantalla y que aparezca el resultado de filter







// export const example = () => {
//     return 'example';
// };

// export const anotherExample = () => {
//     return 'OMG';
// };