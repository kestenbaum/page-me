import axios from "axios";
import {IGetData} from "../types";

class WorksServices {
    private URL = "https://kestenbaum-page-me-api.onrender.com/api/works"

    getWorks = async () => {
        const response = await axios.get<IGetData>(this.URL)
        return response.data?.data
    }
}


export const worksServices = new WorksServices()