import {combineReducers} from "redux";
import peopleReducer from "./peopleReducer/peopleReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../index";


const rootReducer=combineReducers({
    people:peopleReducer
})

export type RootState=ReturnType<typeof rootReducer>
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer