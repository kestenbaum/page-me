import {IAction} from "../../../types";

const initialState = {
    sidebarClass: ['sidebar']
}

export const reducerSidebar = (state = initialState , action:IAction) => {
    switch (action.type){
        case "ADD_CLASS":
            return {...state, sidebarClass: [...state.sidebarClass, action.payload]}
        case "REMOVE_CLASS":
            return {...state, sidebarClass: state.sidebarClass.filter(item => item !== action.payload)}
        default:
            return {...state}
    }
}

