import {IAction} from "../../../types";

interface IStateWork {
    id: number
    title: string
    link: string
}

interface IWork {
    works: IStateWork[]
}

const initialState:IWork = {
    works: [
        {
            id: 1,
            title: 'Airbag Layout',
            link: 'https://kestenbaum.github.io/airbag-layout/'
        },
        {
            id: 2,
            title: 'IT Services',
            link: 'https://kestenbaum.github.io/Portfolio/it/'
        }
    ]
}

export const workReducer = (state = initialState, action:IAction) => {
    switch (action.type){
        case "DATA_WORKS":
            return {...state}
        default:
            return {...state}
    }
}