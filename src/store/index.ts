import {combineReducers, createStore} from "redux";
import {reducerSkill} from "./reducer/skillReducer/reducerSkill";
import {reducerWork} from "./reducer/workReducer/reducerWork";

const rootReducer = combineReducers({
    skills: reducerSkill,
    workPage: reducerWork
})


export type useTypedSelector = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)