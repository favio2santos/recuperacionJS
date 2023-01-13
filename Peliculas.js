class Pelicula {
  static GENEROS = ["Action","Comedy","Adventure","Animation","Children","Sci-Fi","Drama","Documentary","Thriller","Romance","Fantasy","Crime","Horror","War","Musical","Mystery","Film-Noir","Western"];
  
  #presupuesto = 0;
  constructor(titulo, id, genero = [], presupuesto = 0, director = '') {
    this.titulo = titulo;
    this.id = id;
    this.genero = [genero];
    this.#presupuesto = presupuesto;
    this.director = director;
  }

  getPresupuesto() {
    return this.#presupuesto;
  }

  setPresupuesto(presupuesto) {
    if (presupuesto >= 0) {
      this.#presupuesto = presupuesto;
    }
  }

  addGenero(genero) {
    if (!this.genero.includes(genero) && Pelicula.GENEROS.includes(genero)) {
      this.genero.push(genero);
    } else {
      console.log('Este género ya está incluído.');
    }
  }

  removeGenero(genero) {
    let index = this.genero.indexOf(genero);
    this.genero.splice(index, 1);
  }

  toString() {
    return `${this.titulo} (${this.director}) ${this.#presupuesto}€ [${this.genero}]`;
  }
}

function obtenerLista() {
  let lista = JSON.parse(localStorage.getItem('Peliculas'));
  let pelis = [];
  lista.forEach(p => {
    pelis.push(new Pelicula(p.titulo, p.id, p.genero, p.presupuesto, p.director));
  });

  return pelis;
}

function mostrarPeliculas() {
  let pelis = obtenerLista();
  let ul = document.querySelector('ul');
  pelis.forEach(p => {
    let li = document.createElement('li');
    li.textContent = p;
    ul.append(li);
  });
}

function mostrarOrden() {
  let pelis = obtenerLista();
  pelis.sort();
  let ul = document.querySelector('ul');
  pelis.forEach(p => {
    let li = document.createElement('li');
    li.textContent = p;
    ul.append(li);
  });
}