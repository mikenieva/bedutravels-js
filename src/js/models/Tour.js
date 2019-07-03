import axios from 'axios'
import { key } from '../config'

export default class Tour {
    constructor(id) {
        this.id = id
    }
    async getTour(country){
        try {
            const res = await axios(`./data/${country}.json`)
            
            const singleTour = res.data.find( e => e.id === this.id);

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
            this.fechasDisponibles = singleTour.fechasDisponibles
            this.asientosDisponibles = singleTour.asientosDisponibles
            this.asientosReservados = singleTour.asientosReservados

        } catch(error){
            alert(err)
        }
    }

    calcServings(){
        this.servings = 1
    }

    updateServings (type) {
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;
        this.servings = newServings;
    }
}