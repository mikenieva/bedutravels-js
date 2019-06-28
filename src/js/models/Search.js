import axios from 'axios'

import { key } from '../config'

export default class Search {
    constructor(query){
        this.query = query
    }

    async getResults(){
        const pais = this.query.toLowerCase()
        try{
            const res = await axios(`./${pais}.json`)
            this.result = res.data
            console.log("Fetching:", this.result)
        } catch (error){
            console.log("Try again")
        }
    }
}

