# BEDU Travels | Javascript

## Tabla de Contenido

- [Preambulo](#preámbulo)

- Sesión 1: Fundamentos de Programación
  
  - [Objetivos](#objetivos)
  - [ALCANCE 1: Planeación de la aplicación ](#alcance-1-dise%C3%B1a-el-arreglo-de-objetos-tours)
  - [ALCANCE 2. Diseñemos el arreglo de objetos "tours"`](#alcance-2-crea-una-variable-de-usuario-en-indexjs)
  - [ALCANCE 3. Generemos una función "searchTours"](#alcance-3-crea-una-funci%C3%B3n-buscarToursPorPais)
  - [ALCANCE 4. Probemos nuestra función "searchTours"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)

- Sesión 2: DOM
  - [ALCANCE 5: Ciclos con Git y GitHub](#alcance-0-gesti%C3%B3n-del-proyecto)
  - [ALCANCE 6: Integremos HTML con Javascript](#alcance-1-dise%C3%B1a-el-arreglo-de-objetos-tours)
  - [ALCANCE 7. Crea la barra de búsqueda con su botón](#alcance-2-crea-una-variable-de-usuario-en-indexjs)
  - [ALCANCE 8. Integra la función searchTours con la barra de búsqueda](#alcance-3-crea-una-funci%C3%B3n-buscarToursPorPais)

- Sesión 3: ES6

  - [ALCANCE 9. Convierte todo tu código anterior a ES6](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 10. Exportación e importación](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 11. Modelo, Vista, Controlador](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 12. Expresa los países encontrados en HTML](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)

- Sesión 4: NodeJS y Arquitectura
  - [ALCANCE 13. Instalemos Node.js](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 14. Configuremos Webpack y Babel](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 15. Javascript compilando con Webpack](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 16. Integremos archivos y funciones previas](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  
- Sesión 5: JSON y APIs
  - [ALCANCE 17. Creando archivos JSON](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)  
  - [ALCANCE 18. Consumo de JSON](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 19. "State" y renderización de resultados](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 20. Guardando nuestros datos en "state"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)

- Sesión 6: Asincronía
  - [ALCANCE 21. Async y Await en el área de búsqueda](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 22. Async y Await en el área de Tours](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 23. Expresa los países encontrados en HTML](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 24. Expresa los países encontrados en HTML](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  
- Sesión 7: Programación Orientada a Objetos
  - [ALCANCE 25. Diseñando la clase "Tour"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 26. Diseñando la clase "Search"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 27. Combinando nuestros modelos con las vistas](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 28. Diseñando el controlador](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  
- Sesión 8: Programación Funcional
  - [ALCANCE 29. Utilizando .find para encontrar tours](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 30. Utilizando .map para renderizar conjuntos de datos](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)
  - [ALCANCE 31. Subiendo el proyecto a GitHub](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)



***

## Preámbulo

![Imgur](https://i.imgur.com/tHDS1of.jpg)

Nuestra empresa se llama BEDU Travels.

Habiendo tenido tanto éxito en nuestras franquicias de agencias de viajes, hemos recibido una ronda de capital para comenzar nuestra expansión.

Entre los retos, está la construcción de nuestra plataforma online, la cual queda a cargo de nosotros, el equipo de desarrollo. 

Tenemos trazado el camino hacia el primer producto mínimo viable, por lo que ya podemos empezar a desarrollar.

Mientras tanto, el área de ventas empieza a armar los primeros tours para que se suban a nuestra plataforma, así como un listado de datos que deben también reflejarse.

Con esto claro, comenzamos con el producto.

![Proyecto Final](https://i.imgur.com/oW7btoZ.png)

# Sesión 1: Fundamentos de Programación

## Consideraciones técnicas

Te pedimos que instales los siguientes programas:

- [Visual Studio Code](https://code.visualstudio.com/). Es de los mejores editores, pero puedes usar otro si así lo deseas.
- [Git](https://git-scm.com/downloads). Para controlar las versiones y subir nuestros cambios a GitHub.
- [GitHub](https://github.com.com/). Crea tu cuenta en caso de que no lo hayas hecho.

## **Objetivos**

Crearemos nuestro primer script. Incluirá una función que retorne tours, a partir de la creación de un objeto.

## ALCANCE 0: Haz un "fork" del repositorio

- Primero, le darás click al botón de "Fork" dentro de este repositorio.

- Posteriormente, bajarás el proyecto a tu computadora. Para hacerlo, abre tu terminal y ejecuta los siguientes comandos. 

> Recuerda sustituir "TU-USUARIO-DE-GITHUB" por tu respectivo usuario de GitHub.

```shell  
git clone https://github.com/[TU-USUARIO-DE-GITHUB]/bedutravels-js.git
```

ó

```shell   
mkdir bedutravels

cd bedutravels

git init

git remote add origin https://github.com/[TU-USUARIO-DE-GITHUB]/bedutravels-js.git

git pull origin master
```

- Verás un archivo, que será un `README.md` y un archivo `.gitignore`

## ALCANCE 1: Diseñemos el arreglo de objetos "tours"

- Dentro del proyecto, crearás dos archivos:
  - `index.html`
  - `index.js`

- Dentro de `index.html` crearás tus etiquetas básicas (html, head, body). Puedes escribir `html:5` si estás usando Visual Studio Code para que te la genere automáticamente.

- Recuerda vincular el archivo de Javascript a través de la etiqueta `<script>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BEDU Travels: Encuentra tu siguiente destino</title>
</head>
<body>


<script src="./index.js"></script>
</body>
</html>
```

- En `index.js`, crea una variable llamada `toursMEX` y asígnale un arreglo de objetos que cumpla con las siguientes propiedades:

```javascript
id: Number
slug: String,
nombreTour: String
operador: String
tipoDeTour: String
descripcion: String
img: String
pais: String
zonaLlegada: String,
zonaSalida: String,
escalas: Array
acomodacionIncluida: Boolean,
transporteIncluido: Boolean,
edadMinima: Number,
requisitos: Object
    - seguroDeViaje: Boolean
duracionTour: Number,
opiniones: null,
calificacion: null,
precioUSD: Number,
fechasDisponibles: Object,
  - "2019": Array of Objects        
    - id: String,
    - fechaInicio: String,
    - fechaFin: String
    - asientosDisponibles: Number,
    - asientosReservados: Number,
    - precioRealUSD: Number
```

Colocamos a continuación el primer tour para que puedas guiarte. Recuerda crear 3 tours con 3 `fechas disponibles`.

```javascript
var toursMEX = [
    {
      "id": "001",
      "slug": "mexico",
      "nombreTour": "Chiapas Hermoso",
      "operador": "Viajeros x el mundo",
      "tipoDeTour": "Tour en Grupo",
      "descripcion": "Vive la naturaleza y disfruta de la aventura en la selva de Chiapas.",
      "img": "https://i.imgur.com/dp6ZqwA.jpg",
      "pais": "México",
      "zonaLlegada": "Chiapas",
      "zonaSalida": "Ciudad de México",
      "escalas": ["Ciudad de México", "Chiapas"],
      "acomodacionIncluida": true,
      "transporteIncluido": true,
      "edadMinima": 21,
      "requisitos": {
        "seguroDeViaje": true
        },
      "duracionTour": 15,
      "opiniones": null,
      "calificacion": null,
      "precioUSD": 1181,
      "fechasDisponibles": {
        "2019": [
          {
            "id": "2019-chiapas-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-chiapas-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-chiapas-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    }
  }
  ...
```

- Ahora crea una variable `toursCOL` para Colombia y `toursPER` para Perú. Recuerda agregarles sus 3 tours respectivamente.

Puedes [entrar aquí](https://github.com/mikenieva/bedutravels-js/blob/finished/dist/data/mexico.json) para ver un resultado final. Es muy seguro que difieran los datos, pero si en estructura coincide perfecto.


## ALCANCE 2. División del archivo `tours.js`

Dividiremos el archivo en tres secciones:

a. Constantes
b. Funciones (Declaraciones)
c. Eventos (Invocaciones)

```javascript

// 1. CONSTANTES

var toursMEX  =   {...}
var toursCOL  =   {...}
var toursPER  =   {...}


// 2. FUNCIONES (DECLARACIONES)


// 3. FUNCIONES (INVOCACIONES)

```

A continuación, escribiremos nuestra primera función.


## ALCANCE 3. Crea una función "searchTours"

- Crea una función en una constante llamada `searchTours`.

El objetivo de la función es **retornar** los tours de un país, los cuales se encuentran en la propiedad de "fechasDisponibles".

El parámetro que deberá contener es:

> `toursArray`. Un arreglo de objetos que contenga países con sus tours, (básicamente una de tus constantes).

El retorno deberá ser:

> Un arreglo de objetos con los tours de ese país en específico.

```javascript
const searchTours = (toursArray) => {
  // Aquí va tu código
};
```
- La función deberá ser colocada en la sección 2 de nuestra arquitectura.

- Una vez realizada, compárala con la que tenemos para ti a continuación:

```javascript
const searchTours = (toursArray) => {
  // Aquí va tu código
};
```

## ALCANCE 4. Probemos nuestra función "searchTours"

- Ya que la construiste, invócala en la sección 3 de nuestro archivo.

```javascript
searchTours(toursMEX);
//=>   [{...tour1},{...tour2},{...tour3}]
```

Para cerrar el ejercicio, realiza un `console.log()` donde generes un `string` el cual indique el nombre del usuario y cuántos tours tiene México, aprovechando tu función anterior.

```shell
console.log(`Hay X tours`)
```

# Sesión 2: DOM

## Objetivos

Crearemos una página web que contenga una barra de búsqueda, utilizando nuestra función `searchTours` creada anteriormente.

## ALCANCE 5: Arquitectura de carpetas I

- Crea una carpeta llamada "js".
  
- Inserta tu archivo `index.js` dentro de la carpeta "js".
  
```javascript

|-js
   |-index.js
|-index.html
|-README.txt
|-.gitignore

```

- Crea un archivo llamado index.html en la raiz del proyecto. Este será el archivo HTML donde se ejecutarán nuestros archivos Javascript.

## ALCANCE 6: Integremos HTML con Javascript

 Vamos a regresar a nuestro HTML y vamos a empezar a conectar funciones con etiquetas.

- Vamos a generar una etiqueta `<header></header>` y lateralmente, dos etiquetas `<div></div>`

```HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BEDU Travels: Encuentra tu siguiente destino</title>
  </head>
  <body>
    <header></header>
    <div></div>
    <div></div>
    <script src="./index.js"></script>
  </body>
</html>
```


## ALCANCE 7: Crea la barra de búsqueda con su botón

- Nos colocaremos en `<header></header>`. Luego, insertaremos una etiqueta `<form></form>`.
  
- Dentro de `<form>`, inserta una etiqueta `<input/>`

- Inmediatamente, `<button>Buscar</button>`.
 
```html
...

  <header>
    <form>
      <input type="text" />
      <button>Buscar</button>
    </form>
  </header>

...
```

- Introduce un `class` como atributo para el `<form>`, para que podamos identificarlo dentro del archivo de Javascript. El valor sería: `search`.


```html

  <form class="search">

```

- Asimismo, le pondrás un `class` para el `input`. 

```html

<input type="text" class="search__field">

```


- Crea una carpeta CSS y dentro, un archivo `index.css`. Posteriormente, inserta los siguientes estilos. Puedes verlos [aquí](https://github.com/mikenieva/bedutravels-js/blob/finished/dist/css/style.css). 

La estructura de carpetas y archivos quedaría de la siguiente manera:

```javascript

|-css
|  |-index.css
|-js
|  |-index.js
|-index.html
|-README.txt
|-.gitignore

```


Recuerda vincular dentro de tu `index.html` la etiqueta `<link>` con tu hoja de estilos.


```html
<link href="./css/index.css" rel="stylesheet" />
```

## ALCANCE 8: Prueba tu barra de búsqueda

 - Como último paso, conecta la función `searchTours` con el input que ya tenemos creado.

Entra a tu `index.js` y agrega, en el área de "Constantes" los siguientes valores.

```javascript

// 1. CONSTANTES

var searchForm  =     document.querySelector('.search')
var searchInput =     document.querySelector('.search__field')
var searchRes   =     document.querySelector('.results')
var searchReslist =   document.querySelector('.results__list') 
var searchResPages =  document.querySelector('.results__pages')
var tour           =  document.querySelector('.tour')

var state = {}

```

- Ahora, agregaremos un par de funciones. Observa cada comentario donde se explica que hace cada sentencia:

```javascript

...

// 2. FUNCIONES

function controlSearch(){
    // 1. Obtener la búsqueda de la vista
  var query = searchInput.value

  if (query) {
    alert(query)
  }
};

// 3. EVENTOS

searchForm.addEventListener("submit", function(){
  event.preventDefault()
  controlSearch()
})

```

Si todo sucede correctamente, cuando coloques algo en el área de búsqueda, deberá alertarte un mensaje con la palabra que estás buscando.

# Sesión 3: ES6

## ALCANCE 9: Convierte todo tu código anterior a ES6

En esta sesión, convertiremos todo nuestro código a ES6. 

Primero, iremos a nuestro archivo `index.js` y convertiremos cada línea. Observa cómo integramos los "arrow functions".

```javascript

// 2. FUNCIONES



const searchTours = (toursArray) => {
    // Tu código
  };

const controlSearch = () => {
    // 1. Obtener la búsqueda de la vista
  const query = searchInput.value
    
  if (query) {
    alert(query)
  }
};

// 3. EVENTOS

searchForm.addEventListener("submit", () => {
  controlSearch()
})

```


## ALCANCE 10: Arquitectura II. Exportación e importación

- Lo que haremos ahora será crear nuevas carpetas y crear nuevos archivos, que quedarán de esta manera.

```javascript

|- src
|  |-js
|  |   |---models
|  |   |   |-Search.js
|  |   |   |-Tour.js
|  |   |
|  |   |---views
|  |   |   |-searchView.js
|  |   |   |-tourView.js
|  |   |   |-base.js
|  |   |
|  |   |-index.js
|  |   |-config.js
|  |
|  |-css
|  | |-index.css
| 
|-index.html

```

**Observaciones**

- Todos los archivos, excepto `index.html` irán sobre una carpeta llamada `src`.
  
- Observa que nuestro archivo `index.js` lo colocaremos dentro de la carpeta js.

- Aparecen dos nuevas carpetas (models y views).

- Tenemos nuestra carpeta `css` con su respectivo `index.css`

Asimismo, observa que generamos una carpeta llamada "models"


## ALCANCE 11: Modelo, Vista, Controlador

Voy a explicarte un concepto llamado "Modelo", "Vista, "Controlador".

Cada modelo contendrá una clase, el cuál tendrá su constructor y diversos métodos.

Cada vez que necesitemos crear un objeto, utilizaremos estas clases.

La vista se refiere a las funciones que renderizan código dinámico, incluyendo HTML y Javascript. Serán "pedazos de código dinámico" que aparecerán en nuestro `ìndex.html`.

Finalmente, el controlador. Este se encargará de ejecutar cada módulo, extrayendo del modelo y vista las funciones respectivas.

A este patrón se le conoce como MVC (Modelo-Vista-Controlador) y es muy popular en las aplicaciones.

- Bien. Ahora, cambiaremos/moveremos nuestro código a las diferentes áreas de la aplicación.

- Primero, necesitaremos trabajar un archivo llamado `base.js` el cual contendrá todas nuestras asignaciones (variables) para hacer comunicación vía DOM.

**./js/views/base.js**

```javascript
export const elements = {
    searchForm:     document.querySelector('.search'),
    searchInput:    document.querySelector('.search__field'),
    searchRes:      document.querySelector('.results'),
    searchReslist:  document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    tour:         document.querySelector('.tour')
}

export const elementStrings = {
    loader: 'loader'
}

export const renderLoader = parent => {
    const loader = `
        <div class=${elementStrings.loader}>
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `

    parent.insertAdjacentHTML('afterbegin', loader)
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`)
    if(loader) loader.parentElement.removeChild(loader)
}

```

- Observa las diferentes funciones que colocaremos en el modelo "Search":


**./js/models/Search.js**

```javascript

// 1. IMPORTACIONES

import axios from 'axios'
import { key } from '../config'

// 2. CLASE

export default class Search {
    
    // A. CONSTRUCTOR
    constructor(query){
        this.query = query
    }

    // B. MÉTODOS
    async getResults(){
        const pais = this.query.toLowerCase()
        try{
            const res = await axios(`./data/${pais}.json`)
            this.result = res.data
        } catch (error){
            console.log("Intenta nuevamente")
        }
    }
}

```

Ahora, realicemos la vista de "search", denominada `searchView.js`

**./js/views/searchView.js**

```javascript

// 1. IMPORTACIONES
import { elements } from './base'



const limittourTitle = (title, limit = 25) => {
    const newTitle = []
    if(title.length > limit){
        title.split(' ').reduce((acc, curr) => {
            if(acc + curr.length <= limit){
                newTitle.push(curr)
            }
            return acc + curr.length
        }, 0)
        return `${newTitle.join(' ')} ...`
    } 
    return title
}

const rendertour = tour => {
    const markup = `
        <li>
        <a class="results__link" href="#${tour.slug}-${tour.id}">
            <figure class="results__fig">
                    <img src="${tour.img}" alt="${tour.nombreTour}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limittourTitle(tour.nombreTour)}</h4>
                    <p class="results__author">${tour.pais}</p>
                </div>
            </a>
        </li>        
    `
    elements.searchReslist.insertAdjacentHTML('beforeend', markup)
}

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page -1 : page +1}>
    <span>Página ${type === "prev" ? page - 1 : page + 1}</span>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${
        type === "prev" ? "left" : "right"
        }"></use>
    </svg>
    </button>
`;

const createMessage = () => `
    <button class="btn-inline-none">
        Todos los tours están mostrados
    </button>
`;


const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage)
    
    let button;
    if(page === 1 && pages > 1) {
        button = createButton(page, 'next')
    } else if(page < pages) {
        button = `
            ${button = createButton(page, 'prev')}
            ${button = createButton(page, 'next')}
        `
    } else if (page === pages && pages > 1){
        button = createButton(page, 'prev')
    } else {
        button = createMessage()
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button)

}

export const renderResults = (tours, page = 1, resPerPage = 5) => {
    const start = (page - 1) * resPerPage
    const end = page * resPerPage

    tours.slice(start, end).forEach(rendertour)

    renderButtons(page, tours.length, resPerPage)
}

export const getInput = () => elements.searchInput.value

export const clearInput = () => {
    elements.searchInput.value = ''
}

export const clearResults = () => {
    elements.searchReslist.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

```

Con esto, tenemos nuestro modelo y vista de la búsqueda terminada.

- Es momento de conectar todo a través de nuestro `index.js`. Este será el controlador de nuestro proyecto. 

Haremos cambios al mismo:


```javascript

// 1. IMPORTACIONES

import Search from "./models/Search";
import Tour from "./models/Tour";
import * as searchView from "./views/searchView";
import * as tourView from "./views/tourView";
import { elements, renderLoader, clearLoader } from "./views/base";


// 2. STATE (Estado)
const state = {};

// 3. CONTROLADORES

// A1. SEARCH (DECLARACIONES)
const controlSearch = async () => {
  // 1. Obtener la búsqueda de la vista
  const query = searchView.getInput()

  if (query) {
    // 2) Si existe un dato válido, creamos un nuevo objeto "search" y lo agregamos al "state"
    state.search = new Search(query);

    // 3) Preparamos la interfaz para los resultados
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        // 4) Buscamos los tours
        await state.search.getResults();

        // 5) Renderizamos los resultados en la interfaz
        clearLoader();
        searchView.renderResults(state.search.result);
    } catch(err){
        alert(err)
        clearLoader();
    }  
  }
};

// A2. SEARCH (INVOCACIONES)

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

// B1. TOUR (DECLARACIONES)

const controltour = async () => {
  // Get ID from url
  const hashless = window.location.hash.replace("#", "");

  const id =  hashless.match(/\d+/g)[0]
  const country =   hashless.match(/[a-zA-Z]+/g)[0]
  
  if (id) {
    // Preparamos interfaz para cambios
    tourView.cleartour()
    renderLoader(elements.tour)

    // Creamos nuevo objeto tour
    state.tour = new Tour(id);
    
    try {
      // Obtenemos la data del tour
        await state.tour.getTour(country);

      // Calculamos cuántas personas utilizarán el tour
        state.tour.calcServings();

      // Renderizamos el tour
        clearLoader();
        tourView.rendertour(state.tour)

    } catch (err) {
        alert(err);
        }
    }
};

// B2. TOUR (INVOCACIONES)

// Cuando haya un cambio
["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controltour)
);

// Manejamos los cambios de cuántas personas estarán en el tour
elements.tour.addEventListener('click', e => {
  if(e.target.matches('.btn-decrease, .btn-decrease *')){
    // Acción para decrementar
    if(state.tour.servings > 1){
        state.tour.updateServings('dec')
        tourView.updateServingsIngredients(state.tour)
    }
  } else if(e.target.matches('.btn-increase, .btn-increase *')){
    // Acción para incrementar
    state.tour.updateServings('inc')
    tourView.updateServingsIngredients(state.tour)
  }
})


```

Observa los diferentes comentarios entre cada función y trata de explicarlos.


# Sesión 4: NodeJS & Arquitectura

## ALCANCE 13: Instalamos Node.js

- Tendrás que ir a la página de (NodeJS)[https://nodejs.org] y descargar el programa. Dependiendo de tu sistema operativo, se te indicará cuál es tu mejor recomendación.

De preferencia, elige el LTS (Long-Term Support) que significa una versión de Node que estará soportado y mantenido a largo plazo por la comunidad.

![NodeJS Installation](https://i.imgur.com/opSa7md.png)

Abrirás tu terminal y a través del siguiente comando confirmarás que ya lo tienes incorporado.

```shell
npm --version
```

Si el retorno es un número, significa que ya está listo tu sistema.


- Entraremos a la termianl y escribiremos:

```shell
npm init
```

## ALCANCE 14: Configuremos Webpack y Babel


```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
```

## ALCANCE 15: Javascript compilando con Webpack

## ALCANCE 16: Integremos archivos y funciones previas


# Sesión 5: JSON y APIs

## ALCANCE 17: Creando archivos JSON

## ALCANCE 18: Consumo de archivos JSON

## ALCANCE 19: "State" y rendrización de resultados

## ALCANCE 20: Guardando nuestros datos en "state"




# Sesión 6: Asincronía

## ALCANCE 21: Async y Await en el área de búsqueda

## ALCANCE 22: Generando los eventos para el área de búsqueda

## ALCANCE 23: Async y Await en el área de tours

## ALCANCE 24: Generando los eventos para el área de tours


# Sesión 7: Programación Orientada a Objetos

## ALCANCE 25: Diseñando la clase "Tour"

## ALCANCE 26: Diseñando la clase "Search"

## ALCANCE 27: Combinando nuestros modelos con las vistas

## ALCANCE 28: Diseñando el controlador



# Sesión 8: Programación Funcional


## ALCANCE 29: Utilizando .find para encontrar tours

## ALCANCE 30: Utilizando .map para renderizar conjuntos de datos

## ALCANCE 31: Subiendo el proyecto a GitHub



