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

- Verás un único archivo, que será un `README.md`

## ALCANCE 1: Diseñemos el arreglo de objetos "tours"

- Dentro del proyecto, crea un archivo llamado `tours.js`

- En este archivo, crea una constante `toursMEX` y asígnale un arreglo de objetos que cumpla con las siguientes propiedades:

```javascript
id: Number
nombreTour: String
operador: String
tipoDeTour: String
descripcion: String
img: String
pais: String
zonaSalida: String,
zonaLlegada: String,
escalas: Array
acomodacionIncluida: Boolean,
transporteIncluido: Boolean,
edadMinima: Number,
requisitos: Object
    - seguroDeViaje: Boolean
duracionTour: Number,
opiniones: null,
calificacion: null,
precioUSD: null,
fechasDisponibles: Object,
    - "[Año específico]": Object
        - "[Fecha específica]": Object
            - asientosDisponibles: Number,
            - asientosReservados: Number
```

Colocamos a continuación el primer tour para que puedas guiarte. Recuerda crear 3 tours con 3 `fechas disponibles`.

```javascript
const toursMEX = [
    {
      "id": "001",
      "nombreTour": "Chiapas Hermoso",
      "operador": "Viajeros x el mundo",
      "tipoDeTour": "Tour en Grupo",
      "descripcion": "Lindo viaje a Chiapas",
      "img": "https://megustavolar.iberia.com/wp-content/uploads/San_Cristobal_Casas_Chiapas_Mexico_ferrantraite_Istock.jpg",
      "pais": "México",
      "zonaLlegada": "Puebla",
      "zonaSalida": "Chiapas",
      "escalas": ["Puebla", "Ciudad de México", "Chiapas"],
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
        "2019": {
          "001-30Marzo": {
            "asientosDisponibles": 15,
            "asientosReservados": 4
          },
          "002-02Abril": {
            "asientosDisponibles": 15,
            "asientosReservados": 6
          },
          "003-25Abril": {
            "asientosDisponibles": 15,
            "asientosReservados": 1
          }
        }
      }
    }
    ...
```

- Ahora crea una constante para Colombia y otro para Perú. Haz el mismo procedimiento que con México.

- Al final tendrás 3 constantes (cada país) y tres fechas disponibles en cada uno.

## ALCANCE 2. Planteemos la estrategia técnica

Dividiremos el archivo en dos partes:

a. Constantes
b. Funciones (Declaraciones)
c. Funciones (Invocaciones)

Por ahora, sólo tenemos constantes al inicio. Seguiremos con las funciones.

## ALCANCE 3. Crea una función "searchTours"

- Crea una función en una constante llamada `searchTours`.

  - Parámetros:

    - `toursArray`. Un arreglo de objetos que contenga países con sus tours, (básicamente una de tus constantes).

  - Retorno:
    - Un arreglo de objetos con los tours de ese país en específico.

```javascript
const searchTours = (toursArray) => {
// Aquí va tu código
};

```

## ALCANCE 4. Probemos nuestra función "searchTours"

```javascript
searchTours(toursMEX);
//=>   [{...tour1},{...tour2},{...tour3}]
```

Para cerrar el ejercicio, realiza un `console.log()` donde generes un `string` el cual indique el nombre del usuario y cuántos tours tiene México, aprovechando tu función anterior.

```shell
console.log(`USUARIO encontró X tours en México`)
```

# Sesión 2: DOM

## Objetivos

Crearemos una página web que contenga una barra de búsqueda, utilizando nuestra función `searchTours` creada anteriormente.

## ALCANCE 5: Ciclos con Git y GitHub

- Hasta ahora, tenemos un archivo llamado `tours.js`. Súbelo a GitHub a través de `git push`.

- Ahora, crea una carpeta llamada "js".
  
- Inserta tus dos archivos anteriores (tours.js e index.js) dentro de la carpeta "js"
  
- Crea un archivo llamado index.html en la raiz del proyecto. Este será el archivo HTML donde se ejecutarán nuestros archivos Javascript.

```javascript

|-js
   |-tours.js
   |-index.js
|-index.html

```
- Abre el archivo index.html y crea las etiquetas fundamentales (DOCTYPE, html, head, body)
- Escribe un "hola mundo" y revisa que esté expresado en tu navegador abriendo el archivo.

## ALCANCE 6: Integremos HTML con Javascript

- Inserta una etiqueta `<input>` incluyendo un botón llamado "Buscar".
 
- Dentro de nuestro archivo "index.js", agrega un evento que, al darle click al botón, genere en consola un "Sí funciona".


## ALCANCE 7: Crea la barra de búsqueda con su botón

## ALCANCE 8: Integra la función `searchTours` con la barra de búsqueda

# Sesión 3: ES6

## ALCANCE 9: Convierte todo tu código anterior a ES6

## ALCANCE 10: Exportación e importación

## ALCANCE 11: Modelo, Vista, Controlador

## ALCANCE 12: Expresa los países encontrados con HTML



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


## ALCANCE 14: Configuremos Webpack y Babel


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