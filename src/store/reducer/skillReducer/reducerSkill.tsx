import {DiCss3} from "react-icons/di";
import {AiFillHtml5} from "react-icons/ai";
import {SiJavascript} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {SiRedux} from "react-icons/si";
import {IAction, ISkill} from "../../../types";


export enum Direction {
    GET_SKILL ='GET_SKILL'
}

const initialState:ISkill = {
    data:[
        {id: 1, components: <DiCss3/>, skill: 'HTML5'},
        {id: 2, components: <AiFillHtml5/>, skill: 'CSS/SCSS'},
        {id: 3, components: <SiJavascript/>, skill: 'JavaScript'},
        {id: 4, components: <FaReact/>, skill: 'React'},
        {id: 5, components: <SiRedux/>, skill: 'Redux'},
    ]
}

export const reducerSkill = (state = initialState, action:IAction) => {
    switch (action.type){
        case Direction.GET_SKILL: {
          return {...state}
        }
        default:
            return  {...state}
    }
}

