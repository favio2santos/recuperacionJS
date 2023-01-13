let num = prompt('Número de celdas por filas');
let fila = document.getElementById('fila');
let auto = document.getElementById('auto');
let parar = document.getElementById('parar');
let columna = document.getElementById('columna');
let tabla = document.querySelector('table');

let p = document.getElementById('p');
p.textContent = 'Número de celdas por fila: ' + num;

const fInsert = () => {
  let tr = document.createElement('tr');
  for (let i = 0; i < num; i++) {
    let td = crearCelda();
    tr.append(td);
  }
  tabla.append(tr);
}

function crearCelda() {
  let td = document.createElement('td');
  let al = Math.floor(Math.random()*4);
  switch (al) {
    case 0: td.style.backgroundColor = 'red'; break;
    case 1: td.style.backgroundColor = 'yellow'; break;
    case 2: td.style.backgroundColor = 'green'; break;
    case 3: td.style.backgroundColor = 'blue'; break;
  }

  td.addEventListener('click', () => {
    let col = td.style.backgroundColor;
    switch (col) {
      case 'red': td.style.backgroundColor = 'yellow'; break;
      case 'yellow': td.style.backgroundColor = 'green'; break;
      case 'green': td.style.backgroundColor = 'blue'; break;
      case 'blue': td.style.backgroundColor = 'red'; break;
    }
    
    let hermanos = [];
    let hermano = td.parentNode.firstChild;
    while (hermano) {
      if (hermano.style.backgroundColor == td.style.backgroundColor) {
        hermanos.push(hermano);
        hermano = hermano.nextSibling;
      } else {
        break;
      }
    }
    if (hermanos.length == num) {
      hermanos.forEach(her => {
        her.parentElement.remove();
      });
    }
  });

  return td;
}

fila.addEventListener('click', () => fInsert());

let int;
auto.addEventListener('click', () => {
  int = setInterval(fInsert, 3000);
  auto.disabled = true;
  parar.disabled = false;
});

parar.addEventListener('click', () => {
  clearInterval(int);
  parar.disabled = true;
  auto.disabled = false;
});

columna.addEventListener('click', () => {
  let tr = document.querySelectorAll('tr');
  tr.forEach(t => {
    let td = crearCelda();
    t.append(td);
  });
  num++;
  p.textContent = 'Número de celdas por fila: ' + num;
});