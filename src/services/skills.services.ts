import axios from "axios";
import {Icons, IGetData} from "../types";

class SkillsServices {
    private URL = "https://kestenbaum-page-me-api.onrender.com/api";

    getSkills = async () => {
        try {
            const response = await axios.get<IGetData>(this.URL + '/skills');
            return response?.data.data
        } catch (e) {
            console.error(e)
        }
    }
}

export const skillsServices = new SkillsServices()