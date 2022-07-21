import {combineReducers, createStore} from "redux";
import {reducerSkill} from "./reducer/skillReducer/reducerSkill";
import {reducerWork} from "./reducer/workReducer/reducerWork";
import {reducerSidebar} from "./reducer/sidebarReducer/reducerSidebar";

const rootReducer = combineReducers({
    skills: reducerSkill,
    workPage: reducerWork,
    sidebar: reducerSidebar
})


export type useTypedSelector = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)