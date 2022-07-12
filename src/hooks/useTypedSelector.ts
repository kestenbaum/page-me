import {TypedUseSelectorHook, useSelector} from "react-redux";
import {useTypedSelector} from "../store";

export const useTypeSelector: TypedUseSelectorHook<useTypedSelector> = useSelector