import axios from "axios";
import {IStateWork} from "../types";

class WorksServices {
    private URL_WORKS_HTML = 'http://localhost:5000/web'
    private URL_WORKS_REACT = 'http://localhost:5000/react'

    getWorksHTML = async () => {
       const {data} = await axios.get<IStateWork[]>(this.URL_WORKS_HTML)
       return data
    }

    getWorksReact = async () => {
       const {data} = await axios.get<IStateWork[]>(this.URL_WORKS_REACT)
       return data
    }

}


export const worksServices = new WorksServices()