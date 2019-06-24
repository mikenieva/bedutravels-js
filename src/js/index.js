// 1. Variables

const searchButton = document.getElementById('searchButton')
const mainContent = document.getElementById('main-content')
const listTours = document.getElementById('list-tours')

const tours = [
    {
        id: "001",
        nombre: "Cancun",
        descripcion: "Bonito México",
        image: "https://res.cloudinary.com/dly0dc6ka/image/upload/v1539305612/1539305611769.jpg"

    },
    {
        id: "002",
        nombre: "Bogotá",
        descripcion: "Bonito Colombia"
    },
    {
        id: "003",
        nombre: "Lima",
        descripcion: "Bonito Peru"
    }
]


// State


const state = {}

//2. Controllers
const getTours = (tours) => {
    console.log(tours)
    return tours
}

listTours.innerHTML = ''
    tours.map((tour) => {
        listTours.innerHTML += `
            <div>
                <h1>${tour.nombre}</h1>
                <p>${tour.descripcion}</p>
                <img style="width: 100%" src="${tour.image}" />
            </div>
        `
    })

searchButton.addEventListener('click', () => {
    event.preventDefault()
    
})