import axios from "axios";
import {Icons, IGetData} from "../types";

class ContactServices {
    private URL = "https://kestenbaum-page-me-api.onrender.com/api";

    getContact = async () => {
        const response = await axios.get<IGetData>(this.URL + '/contacts')
        return response.data?.data
    }
}

export const contactServices = new ContactServices()