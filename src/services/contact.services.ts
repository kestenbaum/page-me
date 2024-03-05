import axios from "axios";
import {Icons, IContactBlock} from "../types";

class ContactServices {
    private URL = "http://localhost:5000/contact";

    getContact = async () => {
        const {data} = await axios.get<Icons[]>(this.URL)
        return data
    }
}

export const contactServices = new ContactServices()