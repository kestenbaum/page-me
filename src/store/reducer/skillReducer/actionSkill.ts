import {Direction} from "./reducerSkill";
import {ReactNode} from "react";

export const getReducerSkillAction = (payload: ReactNode) => (Direction.GET_SKILL, payload )