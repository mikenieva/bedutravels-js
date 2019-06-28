# BEDU Travels | Javascript

## Tabla de Contenido

- [Preambulo](#preámbulo)

- Sesión 1: Fundamentos de Programación
  
  - [Objetivos](#objetivos)
  - [ALCANCE 0: Gestión del proyecto](#alcance-0-gesti%C3%B3n-del-proyecto)
  - [ALCANCE 1: Diseñemos el arreglo de objetos "tours"](#alcance-1-dise%C3%B1a-el-arreglo-de-objetos-tours)
  - [ALCANCE 2. Planteemos la estrategia técnica`](#alcance-2-crea-una-variable-de-usuario-en-indexjs)
  - [ALCANCE 3. Generemos una función "buscarToursPorPais"](#alcance-3-crea-una-funci%C3%B3n-buscarToursPorPais)
  - [ALCANCE 4. Probemos nuestra función "buscarToursPorPais"](#alcance-4-indica-el-nombre-del-usuario-y-cu%C3%A1ntos-tours-tiene-colombia-col)

- Sesión 2: DOM
  - [ALCANCE 5: Ciclos con Git y GitHub](#alcance-0-gesti%C3%B3n-del-proyecto)
  - [ALCANCE 6: Integremos HTML con Javascript](#alcance-1-dise%C3%B1a-el-arreglo-de-objetos-tours)
  - [ALCANCE 7. Crea la barra de búsqueda con su botón](#alcance-2-crea-una-variable-de-usuario-en-indexjs)
  - [ALCANCE 8. Integra la función buscarToursPorPais con la barra de búsqueda](#alcance-3-crea-una-funci%C3%B3n-buscarToursPorPais)

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

![Imgur](https://i.imgur.com/XHpENHF.jpg)



## Preámbulo

Nuestra empresa se llama BEDU Travels.

Habiendo teniendo tanto éxito en nuestras franquicias de agencias de viajes, hemos recibido una ronda de capital para comenzar nuestra expansión.

Entre los retos, está la construcción de nuestra plataforma online.

Nuestro equipo empieza a conseguir los primeros tours para nuestra plataforma.

Por ello, con nuestro equipo de desarrollo, iniciaremos la funcionalidad sobre la búsqueda de tours a partir de la lista con la información de los tours.


## Consideraciones técnicas

- [NodeJS](https://nodejs.org)
- [Postman](https://www.getpostman.com/)
- [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads)
- [GitHub Reposity: Projects & Issues](https://help.github.com/en/articles/about-project-boards)





Dentro de nuestro **GitHub Project**, moveremos nuestra historia de usuario:

"Como cliente quiero buscar un destino para agendar un viaje".

Dentro, creamos un issue que vincularemos con un "commit".

## ALCANCE 1: Diseña el arreglo de objetos "tours"

- Crea un archivo llamado `tours.js`

- Crea una constante `tours` y asígnale un arreglo de objetos que cumpla con las siguientes propiedades:

```javascript
id: Number
titulo: String
operador: String
tipoDeTour: String
visitas: Array
acomodacionIncluida: Boolean,
transporteIncluido: Boolean,
edadMinimaRequerida: Number,
requisitos: Object
    - depositoUSD: Number,
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

Colocamos a continuación el primer tour con el primer país para que puedas guiarte.

Deberás crear tres países (MEX, GUA, COL) y cada uno deberá incluir 3 `fechasDisponibles`.

```javascript
const tours = [
    {
        MEX: {
            tours: [
                {// Tour 001
                    id: 001,
                    titulo: "México Desconectado",
                    operador: "Viajeros x el mundo",
                    tipoDeTour: "Tour en Grupo",
                    visitas: ["Puebla", "Ciudad de México, Chiapas"],
                    acomodacionIncluida: true,
                    transporteIncluido: true,
                    edadMinimaRequerida: 21,
                    requisitos: {
                        depositoUSD: 400,
                        seguroDeViaje: true
                    },
                    duracionTour: 15,
                    opiniones: null,
                    calificacion: null,
                    precioUSD: 1181,
                    fechasDisponibles: {
                        2019: {
                            "001-30Marzo": {
                                asientosDisponibles: 15,
                                asientosReservados: 4
                            },
                            "002-02Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 6
                            },
                            "003-25Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 1
                            }
                        }
                    }
                }
                ...
```

- Al final de tu archivo, recuerda exportarlo con `module.exports` para abrir disponibilidad de importación.

## ALCANCE 2. Crea una variable de usuario en `index.js`

- Crea un archivo llamado `index.js`

- Importa `tours.js` al inicio con `require`

- Crea una variable `const` con un objeto que incluya los datos del usuario, con las siguientes propiedades:

```javascript
const usuario = {
  nick: "mikenieva",
  nombre: "Miguel",
  apellido: "Nieva"
};
```

## ALCANCE 3. Crea una función "searchTours"

- Crea una función en una constante llamada `searchTours`.

  - Parámetros:

    - `toursArray`. Un arreglo de objetos que contenga países con sus tours, (básicamente será tu archivo `tours.js`).
    - `countryString`. Un `string` que incluya la clave del país.

  - Retorno:
    - Un arreglo de objetos con los tours de ese país en específico.

```javascript
const searchTours = (toursArray, countryString) => {
  // Dado los dos datos recibidos, busques en toursArray y retornes un arreglo de objetos con los tours de ese país en específico.
};

buscarToursPorPais(tours, "MEX");
//=>   [{...tour1},{...tour2},{...tour3}]
```

## ALCANCE 4. Indica el nombre del usuario y cuántos tours tiene Colombia (COL)

Para cerrar el ejercicio, realiza un `console.log()` donde generes un `string` el cual indique el nombre del usuario y cuántos tours tiene Colombia, aprovechando tu función anterior.

```shell
console.log(`USUARIO encontró X tours en Colombia `)
```



## Objetivos

Crearemos una página web que contenga una barra de búsqueda, utilizando nuestra función `buscarToursPorPais` creada anteriormente.

## ALCANCE 0: Gestión del proyecto

## ALCANCE 1: Genera la arquitectura de carpetas y archivos

- Crea dos carpetas llamadas "js" y "css".
- Inserta tus dos archivos anteriores (tours.js e index.js) dentro de la carpeta "js"
- Crea un archivo llamado index.html en la raiz del proyecto. Este será el archivo HTML donde se ejecutarán nuestros archivos Javascript.

```javascript

|-js
   |-tours.js
   |-index.js
|-css
|-index.html

```
- Abre el archivo index.html y crea las etiquetas fundamentales (DOCTYPE, html, head, body)
- Escribe un "hola mundo" y revisa que esté expresado en tu navegador abriendo el archivo.

## ALCANCE 2: Crea la barra de búsqueda con su botón

- Inserta una etiqueta <input> incluyendo un botón llamado "Buscar".
- Dentro de nuestro archivo "index.js", agrega un evento que, al darle click al botón, genere en consola un "Sí funciona"


## ALCANCE 3: Integra la función `buscarToursPorPais` con la barra de búsqueda

## ALCANCE 4: Expresa los países encontrados en HTML


