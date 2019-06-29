import axios from 'axios'
import { key } from '../config'

export default class Recipe {
    constructor(id) {
        this.id = id
    }
    async getRecipe(country){
        try {
            console.log(this.id)
            const res = await axios(`./data/${country}.json`)
            
            const singleTour = res.data.find( e => {
                console.log("e", e)
                console.log("this.id", this.id)
                console.log(e.id === this.id)
                return e.id === this.id
            });

            this.nombreTour = singleTour.nombreTour
            this.img = singleTour.img
            this.pais = singleTour.pais
            this.zonaSalida = singleTour.zonaSalida
            this.descripcion = singleTour.descripcion
            this.zonaLlegada = singleTour.zonaLlegada
            this.operador = singleTour.operador
            this.tipoDeTour = singleTour.tipoDeTour
            this.escalas = singleTour.escalas
            this.acomodacion = singleTour.acomodacionIncluida
            this.transporte = singleTour.transporteIncluido
            this.edadMinima = singleTour.edadMinima
            this.requisitos = {
                seguroDeViaje: singleTour.requisitos.seguroDeViaje
            };
            this.duracionTour = singleTour.duracionTour
            this.opiniones = singleTour.opiniones
            this.calificacion = singleTour.calificacion
            this.precioUSD = singleTour.precioUSD
            this.fechasDisponibles = this.fechasDisponibles
        } catch(error){
            alert('Hay problemas...')
        }
    }

    calcTime(){
        const numIng = this.ingredients.length
        const periods = Math.ceil(numIng / 3)
        this.time = periods * 15
    }

    calcServings(){
        this.servings = 1
    }

    updateServings (type) {
        // Personas
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        this.servings = newServings;
    }

}