import {IAction, IWork} from "../../../types";
import airbag from '../../../assets/images/airbag.png'
import it from '../../../assets/images/it.png'
import work from '../../../assets/images/work.png'
import technology from './../../../assets/images/technology.png'
import aosta from './../../../assets/images/aosta.png'
import repair from './../../../assets/images/repair.png'


const initialState:IWork = {
    works: [
        {
            id: 1,
            title: 'Airbag Layout',
            img: airbag,
            link: 'https://kestenbaum.github.io/airbag-layout/'
        },
        {
            id: 2,
            title: 'IT Services',
            img: it,
            link: 'https://kestenbaum.github.io/Portfolio/it/'
        },
        {
            id: 3,
            title: 'Work on yourself',
            img: work,
            link: 'https://kestenbaum.github.io/working/'
        },
        {
            id: 4,
            title: 'Technology',
            img: technology,
            link: 'https://kestenbaum.github.io/technology/'
        },
        {
            id: 5,
            title: 'Aosta',
            img: aosta,
            link: 'https://kestenbaum.github.io/Portfolio/aosta/'
        },
        {
            id: 6,
            title: 'Repair',
            img: repair,
            link: 'https://kestenbaum.github.io/Portfolio/project/'
        }
    ]
}

export const reducerWork = (state = initialState, action:IAction) => {
    switch (action.type){
        case "DATA_WORKS":
            return {...state}
        default:
            return {...state}
    }
}