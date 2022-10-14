//importar las funciones puras desde el data js 
const dataGhibli=[
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986"
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1988"
  },
  {
    "title": "The Cat Returns",
    "director": "Hiroyuki Morita",
    "release_date": "2002"
  },
  {
    "title": "Tales from Earthsea",
    "director": "Gorō Miyazaki",
    "release_date": "2006"
  }

]

describe('la funcion filter director deberia retornarme todas las peliculas filtradas de un mismo director', () => {
  it('deberia retornar una funcion', () => {
    expect(typeof filterDirector).toBe('function');
  });
  // it('retornar peliculas', () => {
  //   expect( filterDirector("Gorō Miyazaki", dataGhibli)).toEqual({"Tales from Earthsea"});
  // });
});



describe('dataGhibli.mostrarPeliculaIndividual', () => {
  it('is a function', () => {
    expect(typeof dataGhibli.mostrarPeliculaIndividual).toBe('function');
  });

});

describe('dataGhibli.mostrarDataEnPantalla', () => {
  it('is a function', () => {
    expect(typeof dataGhibli.mostrarDataEnPantalla).toBe('function');
  });


});

describe('dataGhibli.filtrarDirectores', () => {
  it('is a function', () => {
    expect(typeof dataGhibli.filtrarDirectores).toBe('function');
  });

});

describe('dataGhibli.ordenarYears', () => {
  it('is a function', () => {
    expect(typeof dataGhibli.ordenarYears).toBe('function');
  });

});