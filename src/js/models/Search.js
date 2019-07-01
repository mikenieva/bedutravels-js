import axios from 'axios'

import { key } from '../config'

export default class Search {
    constructor(query){
        this.query = query
    }

    async getResults(){
        const pais = this.query.toLowerCase()
        try{
            const res = await axios(`./data/${pais}.json`)
            this.result = res.data
        } catch (error){
            console.log("Try again")
        }
    }
}

