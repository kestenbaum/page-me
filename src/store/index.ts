import {combineReducers, createStore} from "redux";
import {reducerSkill} from "./reducer/skillReducer/reducerSkill";

const rootReducer = combineReducers({
    skills: reducerSkill
})


export type useTypedSelector = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)