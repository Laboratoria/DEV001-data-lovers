// este export nos permite exportar hacia main.js
export const tarjeta = (datos) => {
    //plantillas de las tarjetas a mostrar//
    let plantilla = `
    <article class="tarjeta">
        <header class="header_tarjeta">
          <img src="${datos.img}">
        </header>
        <div class="tarjetabody">
          <p class="title">${datos.title} </p>
          <p class="descripcion">${datos.author} </p>
          <p class="fecha"> ${datos.releaseDay}</p>
        </div>
    </article>
     `
    return plantilla
}