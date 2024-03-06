import axios from "axios";
import {Icons} from "../types";

class SkillsServices {
    private URL = 'http://localhost:5000/skills';

    getSkills = async () => {
        const {data} = await axios.get<Icons[]>(this.URL)
        return data
    }
}

export const skillsServices = new SkillsServices()