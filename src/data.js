export function filtroPokeKanto(pokemones) {
    let pokeKanto = []
    pokemones.forEach(function(pokemon) {
        if (pokemon.generation.name === "kanto") {
            pokeKanto.push(pokemon);
        }
    })
    return pokeKanto;

}







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